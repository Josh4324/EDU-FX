import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="./images/logo.png" />


      <Link to="/register">
        <button className="hbut">Register</button>
      </Link>

    </div>
  );
}
