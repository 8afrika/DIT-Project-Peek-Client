const download = require("downloadjs")

export const generatePDF = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  education,
  experience,
}) => {
  try {
    const data = {
      First_Name: firstName,
      Last_Name: lastName,
      email_address: email,
      Phone_Number: phoneNumber,
      Address: address,
      Educational_Background: education,
      Experiences: experience,
    };

    // console.log(data);

    const response = await fetch(
      "https://54.183.128.15/cv",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response)
    if (response.ok) {
        const data = await response.blob()
        console.log(data)
        download(data, `${firstName} ${lastName} CV.pdf`, "application/pdf");
     
    }
    
  } catch (error) {
    return { error: "Opps, something went wrong!" };
  }
};
