import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { EduContext } from "../context/context";

export default function Page8() {
  const { Logout } = useContext(EduContext);
  const [state1, setState1] = useState(false);

  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Conclusion</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Conclusion</div>
          <div className="cpinner2">
            <div>Conclusion</div>
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
                src="https://www.youtube-nocookie.com/embed/Y2U4Goi80as"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <Link to="/page7">
              <button className="pbut">Prev</button>
            </Link>

            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={Logout}
              className="pbut"
            >
              Logout
            </button>

            <button className="pbut">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
