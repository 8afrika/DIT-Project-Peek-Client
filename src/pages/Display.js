import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Display.css";
import Logo from "../components/Logo";
import editIcon from "../assets/images/edit-button.png";
import color from "../assets/images/color.png";
import download from "../assets/images/download-button.png";
import contactLine from "../assets/images/contact-line.png";
import { BiCopyright } from "react-icons/bi";

function Display() {
  const { state } = useLocation();
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
      <div className="display-main">
        <div className="display-header">
          <Logo />
          <div>
            <div className="color-icon action-icon">
              <img src={color} alt="a white pen" />
              <input id="hidden-color-picker" type={"color"} />
            </div>

            <Link className="action-icon" to="/userinput">
              <img className="edit-icon" src={editIcon} alt="a white pen" />
            </Link>
            <img
              className="download-icon action-icon"
              src={download}
              alt="a white pen"
            />
          </div>
        </div>
        <div className="pdf-viewer">
          <h2 className="firstname">First Name{firstName}</h2>
          <p className="contact">
            0987654321{phoneNumber} | asdf@ghjj.com{email} | dnvkefhu{address}
          </p>
          <p className="label">Educational Background</p>
          <div className="value">
            <p>ngfsoagjnrefhbknstsuehblfntkjh{education}</p>
          </div>
          <p className="label">Work Experience</p>
          <div className="value">
            <p>sljhvuhvb.kajhiuvb{experience}</p>
          </div>
          <p className="copywrite">© Peek 2022</p>
        </div>
      </div>
    </>
  );
}

export default Display;
