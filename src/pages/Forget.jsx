import React from "react";
import { Link } from "react-router-dom";

export default function Forget() {
  return (
    <div>
      <form className="forget">
        <div className="ftext1">Reset Password</div>

        <div className="ftext2">
          Don’t worry, We can fix this! Provide your email for the password
          reset link.
        </div>

        <div className="rbox">
          <label className="rlabel">Email Address</label>
          <input
            className="rinput"
            placeholder="Enter email address"
            required
          />
        </div>
        <button className="rbut">Request Reset Link</button>
      </form>
    </div>
  );
}
