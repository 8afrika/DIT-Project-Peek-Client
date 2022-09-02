import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/UserInput.css";
import Logo from "../components/Logo";
import { validateEmail } from "../data/validate-email";

function UserInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const onPreviewPressed = async () => {
    const validationResponse = await validateEmail({email, phoneNumber});
    console.log(validationResponse)

    navigate("/display", {
      state: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        education,
        experience,
      },
    });
  };


  return (
    <>
      <div className="user-input-main">
        <Logo />
        <div className="user-input-form">
          <div className="first-column">
            <input
              className="input-feilds"
              type={"text"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="input-feilds"
              type={"text"}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              className="input-feilds"
              type={"text"}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="input-feilds"
              type={"text"}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <input
              className="input-feilds"
              type={"text"}
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="second-column">
            <textarea
              className="input-area"
              placeholder="Educational Background"
              value={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            ></textarea>
            <textarea
              className="input-area"
              placeholder="Work Experiences"
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="third-column">
            <button
              className="peek-button"
              type={"button"}
              onClick={onPreviewPressed}
            >
              Preview
            </button>
          </div>
          <div className="fourth-column"></div>
        </div>
      </div>
    </>
  );
}

export default UserInput;
