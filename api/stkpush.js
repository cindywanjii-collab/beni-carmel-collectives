const axios = require("axios");


function formatPhone(phone) {

    let cleaned =
        String(phone)
            .replace(/\s+/g, "")
            .replace(/-/g, "");

    if (cleaned.startsWith("+254")) {

        cleaned =
            cleaned.substring(1);

    }

    if (cleaned.startsWith("07")) {

        cleaned =
            "254" +
            cleaned.substring(1);

    }

    if (cleaned.startsWith("01")) {

        cleaned =
            "254" +
            cleaned.substring(1);

    }

    return cleaned;

}


function getTimestamp() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            now.getDate()
        ).padStart(2, "0");

    const hours =
        String(
            now.getHours()
        ).padStart(2, "0");

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            now.getSeconds()
        ).padStart(2, "0");

    return (
        year +
        month +
        day +
        hours +
        minutes +
        seconds
    );

}


async function getAccessToken() {

    const credentials =
        Buffer.from(
            `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
        ).toString("base64");


    const response =
        await axios.get(
            "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
            {

                headers: {

                    Authorization:
                        `Basic ${credentials}`

                }

            }
        );


    return response.data.access_token;

}


module.exports = async function handler(
    req,
    res
) {

    if (req.method !== "POST") {

        return res
            .status(405)
            .json({
                error:
                    "Method not allowed."
            });

    }


    try {

        const {
            name,
            email,
            phone,
            county,
            address,
            amount,
            items
        } = req.body;


        if (
            !name ||
            !email ||
            !phone ||
            !county ||
            !address ||
            !amount ||
            !items ||
            !items.length
        ) {

            return res
                .status(400)
                .json({
                    error:
                        "Missing checkout information."
                });

        }


        const formattedPhone =
            formatPhone(phone);


        if (
            !/^254\d{9}$/.test(
                formattedPhone
            )
        ) {

            return res
                .status(400)
                .json({
                    error:
                        "Enter a valid Kenyan M-PESA phone number."
                });

        }


        const token =
            await getAccessToken();


        const timestamp =
            getTimestamp();


        const password =
            Buffer.from(
                `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
            ).toString("base64");


        const callbackUrl =
            process.env.MPESA_CALLBACK_URL;


        if (!callbackUrl) {

            return res
                .status(500)
                .json({
                    error:
                        "M-PESA callback URL is not configured."
                });

        }


        const response =
            await axios.post(

                "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",

                {

                    BusinessShortCode:
                        process.env.MPESA_SHORTCODE,

                    Password:
                        password,

                    Timestamp:
                        timestamp,

                    TransactionType:
                        "CustomerPayBillOnline",

                    Amount:
                        Math.round(
                            Number(amount)
                        ),

                    PartyA:
                        formattedPhone,

                    PartyB:
                        process.env.MPESA_SHORTCODE,

                    PhoneNumber:
                        formattedPhone,

                    CallBackURL:
                        callbackUrl,

                    AccountReference:
                        "BENICARMEL",

                    TransactionDesc:
                        "Beni Carmel Collectives order"

                },

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`,

                        "Content-Type":
                            "application/json"

                    }

                }

            );


        return res
            .status(200)
            .json({

                success: true,

                message:
                    response.data.CustomerMessage,

                checkoutRequestId:
                    response.data.CheckoutRequestID,

                merchantRequestId:
                    response.data.MerchantRequestID

            });


    } catch (error) {

        console.error(
            "M-PESA ERROR:",
            error.response?.data ||
            error.message
        );


        return res
            .status(500)
            .json({

                error:
                    error.response?.data?.errorMessage ||
                    error.response?.data?.ResponseDescription ||
                    "M-PESA payment request failed."

            });

    }

};
