import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <div>
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </Link>
      </div>

      <div>
        <div style={{ marginTop: "100px" }} className="reg-text1">
          Payment Page
        </div>

        <form className="rform">
          <div className="rbox">
            <div className="text1">Bank Details</div>

            <div className="text">Account Name - Adesanya Joshua Ayodeji </div>
            <div className="text">Account Number - 0173768670 </div>
          </div>

          <div className="rbox">
            <div className="text1">Crypto Detail</div>

            <div className="text">
              Only accepts stable coins - BUSD, USDT, USDC{" "}
            </div>
            <div className="text">Chains Accepted - BSC and POLYGON</div>
            <div className="text">
              Wallet Address - 0x169f4B5f29aE1aC63bdFadD9e8f26de2fac3F83F
            </div>
          </div>

          <div style={{ marginTop: "50px" }} className="rbox">
            <label
              style={{ fontSize: "20px", marginBottom: "10px" }}
              className="rlabel"
            >
              Upload Payment Evidence
            </label>
            <input type="file" required />
          </div>

          <button className="rbut">Confirm Payment</button>
        </form>
      </div>
    </div>
  );
}
