import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Display.css";
import Logo from "../components/Logo";
import editIcon from "../assets/images/edit-button.png";
import colorIcon from "../assets/images/color.png";
import download from "../assets/images/download-button.png";
import { useState } from "react";
import PageNotFound from "../components/PageNotFound";
import { generatePDF } from "../data/generate-pdf";

function Display() {
  const { state } = useLocation();
  const [color, setColor] = useState("#73956f");

  if (!state) {
    return <PageNotFound />;
  }
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    education,
    experience,
  } = state;
  return (
    <>
      <style>
        {`
      .dynamic-text-color {
        color: ${color};
      }
      `}
      </style>
      <div className="display-main dynamic-text-color">
        <div className="display-header">
          <Logo />
          <div>
            <div className="color-icon action-icon">
              <img src={colorIcon} alt="a white pen" />
              <input
                id="hidden-color-picker"
                type={"color"}
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>

            <Link className="action-icon" to="/userinput">
              <img className="edit-icon" src={editIcon} alt="a white pen" />
            </Link>
            <img
              className="download-icon action-icon"
              src={download}
              alt="a white pen"
              onClick={()=>{generatePDF(state)}}
            />
          </div>
        </div>
        <div className="pdf-viewer">
          <h2 className="firstname">{firstName} {lastName}</h2>
          <p className="contact">
            {phoneNumber} | {email} | {address}
          </p>
          <p className="label">Educational Background</p>
          <div className="value">
            <p>{education}</p>
          </div>
          <p className="label">Work Experience</p>
          <div className="value">
            <p>{experience}</p>
          </div>
          <p className="copywrite">© Peek 2022</p>
        </div>
      </div>
    </>
  );
}

export default Display;
