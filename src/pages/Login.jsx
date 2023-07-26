import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </Link>
      </div>

      <div>
        <div style={{ marginTop: "200px" }} className="reg-text1">
          FX Mastery Accelerator
        </div>

        <form className="rform">
          <div className="rbox">
            <label className="rlabel">Email Address</label>
            <input
              className="rinput"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="rbox">
            <label className="rlabel">Password</label>
            <input
              type="password"
              className="rinput"
              placeholder="Enter new password"
              required
            />
          </div>

          <button className="rbut">Log in</button>

          <div className="log-flex">
            <div className="reg-text2 ">Don’t have an account?</div>

            <Link to="/register">
              <div className="reg-text3">Create account</div>
            </Link>
          </div>

          <Link to="/forget">
            <div className="reg-text4">Forgot your password?</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
