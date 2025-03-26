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


//==========================================================================================================
//------------------------------        REGISTRO           -------------------------------------------------
//==========================================================================================================

export async function register(userData: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }) {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || 'Registro fallido');
    }
  
    // Aquí no se guarda el token, solo se devuelve el usuario
    const data = await res.json();
    return data.user;
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
// };

//==========================================================================================================
//-----------------------------------  LOGIN  -------------------------------------------------------------
//==========================================================================================================

export const login = async (formData: {  email: string; password: string }) => {
    
    console.log(formData);
    if(formData.email == 'alexajennyvalero@gmail.com'){
        if(formData.password == '12345'){
            return {success :true};
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