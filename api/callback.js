module.exports = async function handler(req, res) {
    try {
        console.log("M-PESA CALLBACK:");

        console.log(
            JSON.stringify(req.body, null, 2)
        );

        // Only accept POST requests
        if (req.method !== "POST") {
            return res.status(405).json({
                ResultCode: 1,
                ResultDesc: "Method Not Allowed"
            });
        }

        // M-Pesa expects a successful callback response
        return res.status(200).json({
            ResultCode: 0,
            ResultDesc: "Accepted"
        });

    } catch (error) {
        console.error(
            "M-PESA CALLBACK ERROR:",
            error
        );

        return res.status(500).json({
            ResultCode: 1,
            ResultDesc: "Callback processing failed"
        });
    }
};
