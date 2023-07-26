import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </Link>
      </div>

      <div style={{ marginTop: "100px" }} className="reg-text1">
        FX Mastery Accelerator
      </div>

      <form s className="rform">
        <div className="rbox">
          <label className="rlabel">FirstName</label>
          <input className="rinput" placeholder="Enter first name" required />
        </div>

        <div className="rbox">
          <label className="rlabel">LastName</label>
          <input className="rinput" placeholder="Enter last name" required />
        </div>

        <div className="rbox">
          <label className="rlabel">Email Address</label>
          <input
            className="rinput"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="rbox">
          <label className="rlabel">Create Password</label>
          <input
            className="rinput"
            type="password"
            placeholder="Enter new password"
            required
          />
        </div>

        <button className="rbut">Create Account</button>

        <div className="reg-flex">
          <div className="reg-text2 ">Have an account?</div>

          <Link to="/login">
            <div className="reg-text3">Log in</div>
          </Link>
        </div>
      </form>
    </div>
  );
}
