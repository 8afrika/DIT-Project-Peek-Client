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
      <div className="mobile-landing">
        <div className="landing-main">
          <Logo />
          <div className="column-wrapper">
            <div className="left-column">
              <img className="cv_paper" src={cv_paper} alt="a cv of a woman" />

              <p className="emoji">Peek a boo! 👀</p>
              <p className="emoji-texts">Need a CV for for your dream job?</p>
              <p className="emoji-texts">You don’t know how to make one?</p>
              <p className="emoji-texts">but you still need to be perfect.</p>
              <br />
              <p className="emoji-texts">
                It is all good we have got your back!
              </p>
            </div>
            <div className="right-column">
              <img
                className="mission_impossble"
                src={mission_impossible}
                alt="a man stealing data from a computer"
              />
              <p className="mission-impossble-texts">
                Just give us all the necessary
              </p>
              <p className="mission-impossble-texts">
                information and we will give
              </p>
              <p className="mission-impossble-texts">you a perfect CV.</p>
              <br />
              <p className="mission-impossble-texts">Best part?....</p>
              <p className="mission-impossble-texts">
                you can make it in your favorite
              </p>
              <p className="mission-impossble-texts">color!!</p>
            </div>
            <div className="center-column">
              <Link to={"userinput"}>
                <Button label="Generate" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop-landing">
        <div className="landing-main">
          <Logo />
          <div className="column-wrapper">
            <div className="left-column">
              <p className="emoji">Peek a boo! 👀</p>
              <p className="emoji-texts">Need a CV for for your dream job?</p>
              <p className="emoji-texts">You don’t know how to make one?</p>
              <p className="emoji-texts">but you still need to be perfect.</p>
              <br />
              <p className="emoji-texts">
                It is all good we have got your back!
              </p>

              <img className="cv_paper" src={cv_paper} alt="a cv of a woman" />
            </div>
            <div className="center-column">
              <Link to={"userinput"}>
                <Button label="Generate" />
              </Link>
            </div>
            <div className="right-column">
              <img
                className="mission_impossble"
                src={mission_impossible}
                alt="a man stealing data from a computer"
              />
              <div className="mission-impossble-texts">
                <p>Just give us all the necessary information</p>
                <p >
                  and we will give you a perfect CV.
                </p>
                <br />
                <p >
                  Best part?.... you can make it in your favorite color!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
