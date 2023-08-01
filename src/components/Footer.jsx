import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="ftext1">Smart Traders Academy</div>
      <div className="social">
        <img src="./images/twitter.svg" />
        <a href="https://www.youtube.com/@SmartTraders_Academy" target="_blank">
          <img src="./images/youtube.svg" />
        </a>
      </div>
      <div className="ftext2">© 2023 ST Academy. All rights reserved</div>
    </div>
  );
}
