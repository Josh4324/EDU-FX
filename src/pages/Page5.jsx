import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { EduContext } from "../context/context";

export default function Page5() {
  const { Logout } = useContext(EduContext);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Trade Execution</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Trade Execution</div>
          <div className="cpinner2">
            <div>Trade entry </div>
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
                src="https://www.youtube-nocookie.com/embed/4kVe2a5k_P8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Trade exit </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState2(!state2)}
            >
              {state2 ? "Close" : "View"}
            </div>
          </div>
          {state2 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/ndz-bJS45MM "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <Link to="/page4">
              <button className="pbut">Prev</button>
            </Link>

            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={Logout}
              className="pbut"
            >
              Logout
            </button>

            <Link to="/page6">
              <button className="pbut">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
