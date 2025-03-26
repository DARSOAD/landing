export const sendEmail = async (formData: { companyName: string; mobile: string; service: string }) => {
    
    try {
        const response = await fetch("https://xx9kbosh86.execute-api.ap-southeast-2.amazonaws.com/Sen1/send-email", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        console.log(response);

        if (!response.ok) {
            throw new Error("Failed to send email");
        }

        const result = await response.json();
        return { success: true, message: result.message };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Error sending the email" };
    }
};

export const registerUser = async (formData: { username: string; email: string; password: string }) => {
    
    console.log(formData);
    // try {
    //     const response = await fetch("https://xx9kbosh86.execute-api.ap-southeast-2.amazonaws.com/Sen1/send-email", {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     if (!response.ok) {
    //         throw new Error("Failed to send email");
    //     }

    //     const result = await response.json();
    //     return { success: true, message: result.message };
    // } catch (error) {
    //     console.error("Error sending email:", error);
    //     return { success: false, message: "Error sending the email" };
    // }
};

export const login = async (formData: {  email: string; password: string }) => {
    
    console.log(formData);
    if(formData.email == 'alexajennyvalero@gmail.com'){
        if(formData.password == '12345'){
            return 'success';
        }        
    }
    else{
        return 'Bad credentials';
    }
    // try {
    //     const response = await fetch("https://xx9kbosh86.execute-api.ap-southeast-2.amazonaws.com/Sen1/send-email", {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     if (!response.ok) {
    //         throw new Error("Failed to send email");
    //     }

    //     const result = await response.json();
    //     return { success: true, message: result.message };
    // } catch (error) {
    //     console.error("Error sending email:", error);
    //     return { success: false, message: "Error sending the email" };
    // }
};