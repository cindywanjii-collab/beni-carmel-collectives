module.exports = async function handler(
    req,
    res
) {

    console.log(
        "M-PESA CALLBACK:"
    );

    console.log(
        JSON.stringify(
            req.body,
            null,
            2
        )
    );


    return res
        .status(200)
        .json({

            ResultCode: 0,

            ResultDesc:
                "Accepted"

        });

};
