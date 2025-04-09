export const sendEmail = async (formData: { companyName: string; mobile: string; service: string }) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_GATEWAY_URL as string, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Error al enviar el correo");
        }

        return { success: true, message: "Correo enviado con éxito!" };
    } catch (error: any) {
        console.error("Error en API:", error.message);
        return { success: false, message: error.message };
    }
};
