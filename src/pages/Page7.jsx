import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { EduContext } from "../context/context";

export default function Page7() {
  const { Logout } = useContext(EduContext);
  const [state1, setState1] = useState(false);

  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Risk management</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Risk management</div>
          <div className="cpinner2">
            <div>Risk management strategy </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState1(!state1)}
            >
              {state1 ? "Close" : "View"}
            </div>
          </div>
          {state1 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/aHmgyRd48S0 "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <Link to="/page6">
              <button className="pbut">Prev</button>
            </Link>

            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={Logout}
              className="pbut"
            >
              Logout
            </button>

            <Link to="/page8">
              <button className="pbut">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
