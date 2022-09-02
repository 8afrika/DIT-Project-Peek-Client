import React from "react";
import "../assets/css/Landing.css";
import Logo from "../components/Logo";
import cv_paper from "../assets/images/cv-paper.png";
import mission_impossible from "../assets/images/mission-impossible.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Landing() {
  return (
    <>
      <div className="landing-main">
        <Logo />
        <div className="column-wrapper">
          <div className="left-column">
            <p className="emoji">Peek a boo! 👀</p>
            <p className="emoji-texts">Need a birth certificate for something?</p>
            <p className="emoji-texts">You don’t know how to make one?</p>
            <p className="emoji-texts">but you still need to be perfect.</p>
            <br />
            <p className="emoji-texts">It is all good we have got your back!</p>

            <img className="cv_paper" src={cv_paper} alt="a cv of a woman" />
          </div>
          <div className="center-column">
            <Link to={"userinput"}>
              <Button label="Peek"/>
            </Link>
          </div>
          <div className="right-column">
            <img
              className="mission_impossble"
              src={mission_impossible}
              alt="a man stealing data from a computer"
            />
            <p className="mission-impossble-texts">
              Just give us all the necessary information
            </p>
            <p className="mission-impossble-texts">
              and we will give you a perfect birth certificate.
            </p>
            <br className="mission-impossble-texts" />
            <p className="mission-impossble-texts">
              Best part?.... you can make it in your favorite color!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
