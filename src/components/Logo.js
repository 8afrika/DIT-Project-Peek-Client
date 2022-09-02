import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/"> 
      <img src={logo} alt="brand logo" className="App-logo" />
    </Link>
  );
}

export default Logo;
