import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Course() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Introduction</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Introduction</div>
          <div className="cpinner2">
            <div>Welcome</div>
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
                src="https://www.youtube-nocookie.com/embed/23HpjAW6n10"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Introduction to Forex</div>
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
                src="https://www.youtube-nocookie.com/embed/23HpjAW6n10"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <button className="pbut">Prev</button>
            <Link to="/page2">
              <button className="pbut">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
