import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EduContext } from "../context/context";

export default function Header() {
  let token = localStorage.getItem("edu-token");
  console.log(token);
  const { Logout } = useContext(EduContext);

  return (
    <div className="header">
      <img className="logo" src="./images/logo.png" />

      {token === null ? (
        <div className="hflex">
          <Link to="/register">
            <button className="hbut">Register</button>
          </Link>

          <Link to="/login">
            <button className="hbut">Login</button>
          </Link>
        </div>
      ) : (
        <button onClick={Logout} className="hbut">
          Logout
        </button>
      )}
    </div>
  );
}
