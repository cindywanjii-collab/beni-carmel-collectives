const axios = require("axios");


// ==========================================
// FORMAT KENYAN PHONE NUMBER
// ==========================================

function formatPhone(phone) {

    let cleaned = String(phone || "")
        .trim()
        .replace(/\s+/g, "")
        .replace(/-/g, "");

    // +254712345678 → 254712345678
    if (cleaned.startsWith("+254")) {
        cleaned = cleaned.substring(1);
    }

    // 0712345678 → 254712345678
    if (cleaned.startsWith("07")) {
        cleaned = "254" + cleaned.substring(1);
    }

    // 0112345678 → 254112345678
    if (cleaned.startsWith("01")) {
        cleaned = "254" + cleaned.substring(1);
    }

    return cleaned;
}


// ==========================================
// GENERATE TIMESTAMP
// ==========================================

function getTimestamp() {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        now.getDate()
    ).padStart(2, "0");

    const hours = String(
        now.getHours()
    ).padStart(2, "0");

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
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


// ==========================================
// GET SAFARICOM ACCESS TOKEN
// ==========================================

async function getAccessToken() {

    const consumerKey =
        process.env.MPESA_CONSUMER_KEY;

    const consumerSecret =
        process.env.MPESA_CONSUMER_SECRET;


    if (
        !consumerKey ||
        !consumerSecret
    ) {
        throw new Error(
            "M-PESA API credentials are not configured."
        );
    }


    const credentials =
        Buffer.from(
            `${consumerKey}:${consumerSecret}`
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


// ==========================================
// STK PUSH API
// ==========================================

module.exports = async function handler(
    req,
    res
) {

    // Only POST requests are allowed

    if (req.method !== "POST") {

        return res
            .status(405)
            .json({
                error:
                    "Method not allowed."
            });

    }


    try {

        // ======================================
        // GET CHECKOUT INFORMATION
        // ======================================

        const {
            name,
            email,
            phone,
            county,
            address,
            amount,
            items
        } = req.body || {};


        // ======================================
        // VALIDATE CHECKOUT INFORMATION
        // ======================================

        if (!name) {

            return res
                .status(400)
                .json({
                    error:
                        "Please enter your name."
                });

        }


        if (!email) {

            return res
                .status(400)
                .json({
                    error:
                        "Please enter your email."
                });

        }


        if (!phone) {

            return res
                .status(400)
                .json({
                    error:
                        "Please enter your M-PESA phone number."
                });

        }


        if (!county) {

            return res
                .status(400)
                .json({
                    error:
                        "Please select your county."
                });

        }


        if (!address) {

            return res
                .status(400)
                .json({
                    error:
                        "Please enter your delivery address."
                });

        }


        if (
            !Array.isArray(items) ||
            items.length === 0
        ) {

            return res
                .status(400)
                .json({
                    error:
                        "Your shopping bag is empty."
                });

        }


        // ======================================
        // VALIDATE AMOUNT
        // ======================================

        const numericAmount =
            Number(amount);


        if (
            !Number.isFinite(numericAmount) ||
            numericAmount <= 0
        ) {

            return res
                .status(400)
                .json({
                    error:
                        "Invalid payment amount."
                });

        }


        const paymentAmount =
            Math.round(numericAmount);


        // ======================================
        // FORMAT PHONE NUMBER
        // ======================================

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


        // ======================================
        // CHECK M-PESA CONFIGURATION
        // ======================================

        if (
            !process.env.MPESA_SHORTCODE ||
            !process.env.MPESA_PASSKEY
        ) {

            console.error(
                "M-PESA shortcode or passkey is missing."
            );

            return res
                .status(500)
                .json({
                    error:
                        "M-PESA payment configuration is incomplete."
                });

        }


        // ======================================
        // GET ACCESS TOKEN
        // ======================================

        const token =
            await getAccessToken();


        // ======================================
        // GENERATE TIMESTAMP
        // ======================================

        const timestamp =
            getTimestamp();


        // ======================================
        // GENERATE PASSWORD
        // ======================================

        const password =
            Buffer.from(
                `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
            ).toString("base64");


        // ======================================
        // CALLBACK URL
        // ======================================

        const callbackUrl =
            process.env.MPESA_CALLBACK_URL;


        if (!callbackUrl) {

            console.error(
                "MPESA_CALLBACK_URL is missing."
            );

            return res
                .status(500)
                .json({
                    error:
                        "M-PESA callback URL is not configured."
                });

        }


        // ======================================
        // SEND STK PUSH
        // ======================================

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
                        paymentAmount,

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


        // ======================================
        // CHECK SAFARICOM RESPONSE
        // ======================================

        if (
            !response.data ||
            response.data.ResponseCode !== "0"
        ) {

            console.error(
                "M-PESA STK PUSH FAILED:",
                response.data
            );

            return res
                .status(400)
                .json({

                    error:
                        response.data?.ResponseDescription ||
                        response.data?.errorMessage ||
                        "M-PESA payment request could not be created."

                });

        }


        // ======================================
        // SUCCESS
        // ======================================

        return res
            .status(200)
            .json({

                success: true,

                message:
                    response.data.CustomerMessage ||
                    "Please check your phone and enter your M-PESA PIN.",

                checkoutRequestId:
                    response.data.CheckoutRequestID,

                merchantRequestId:
                    response.data.MerchantRequestID

            });


    } catch (error) {

        console.error(
            "M-PESA STK PUSH ERROR:",
            error.response?.data ||
            error.message
        );


        return res
            .status(500)
            .json({

                error:
                    error.response?.data?.errorMessage ||
                    error.response?.data?.ResponseDescription ||
                    error.message ||
                    "M-PESA payment request failed."

            });

    }

};
