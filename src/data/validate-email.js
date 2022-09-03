export const validateEmail = async ({ email, phoneNumber }) => {
  try {
    const data = {
      email_address: email,
      Phone_Number: phoneNumber,
    };

    console.log(data)

    const response = await fetch(
      "https://54.183.128.15/cv/preview",

      {
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data),
      }
    );
    if(response.ok){
        return {
            emailIsValid: true,
            phoneIsValid: true
        }
    }
    const responseData = await response.json()

    return {
        emailIsValid: !responseData.toString().toLocaleLowerCase().includes("email"),
        phoneIsValid: !responseData.toString().toLocaleLowerCase().includes("phone")
    }
  } catch (error) {
    return { error: "Opps, something went wrong!" };
  }
};
