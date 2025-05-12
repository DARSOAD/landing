import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: "ap-southeast-2" });

export const handler = async (event) => {
    try {
        console.log("Received event:", JSON.stringify(event, null, 2));

        let requestBody = JSON.parse(event);

        const { companyName, mobile, service } = requestBody;

        // Validar que los campos requeridos existen
        if (!companyName || !mobile || !service) {
            throw new Error("Missing required fields");
        }

        const params = {
            Source: "oasiscommercialcleaningsydney@gmail.com",
            Destination: { ToAddresses: ["oasiscommercialcleaningsydney@gmail.com"] },
            Message: {
                Subject: { Data: "New message from the form" },
                Body: { Text: { Data: `Company Name: ${companyName}\nMobile: ${mobile}\nService: ${service}` } }
            }
        };

        const command = new SendEmailCommand(params);
        await sesClient.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully" }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    } catch (error) {
        console.error("Error sending email:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Failed to send email",
                details: error.message
            }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    }
};