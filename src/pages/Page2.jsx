import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Page2() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Technical Tools</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Technical Tools</div>
          <div className="cpinner2">
            <div>Candle Stick Patterns </div>
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
                src="https://www.youtube-nocookie.com/embed/c5kGfOM6agI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Chart patterns </div>
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
                src="https://www.youtube-nocookie.com/embed/SSuKaO43xrE "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Support & Resistance </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState3(!state3)}
            >
              {state3 ? "Close" : "View"}
            </div>
          </div>
          {state3 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/F-o2o6QgjIk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Price action </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState4(!state4)}
            >
              {state4 ? "Close" : "View"}
            </div>
          </div>
          {state4 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/VO6V0vvNtpY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Trend lines </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState5(!state5)}
            >
              {state5 ? "Close" : "View"}
            </div>
          </div>
          {state5 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/uj8-M3DDquA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <Link to="/forex">
              <button className="pbut">Prev</button>
            </Link>

            <Link to="/page3">
              <button className="pbut">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
