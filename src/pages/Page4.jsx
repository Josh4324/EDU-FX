import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Page4() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  return (
    <div>
      <Header />
      <div className="ctext1">FX Mastery Accelerator - Technical Analysis</div>

      <div className="cpage">
        <div>
          <div className="cpinner">Technical Analysis</div>
          <div className="cpinner2">
            <div>Supply and demand zones 1 </div>
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
                src="https://www.youtube-nocookie.com/embed/rK0lvkSZhsk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Supply and demand zones 2 </div>
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
                src="https://www.youtube-nocookie.com/embed/osLbEgtHjgE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Market Structure </div>
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
                src="https://www.youtube-nocookie.com/embed/nril7fYmOE8 "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Trading with Fibonacci </div>
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
                src="https://www.youtube-nocookie.com/embed/FDZUWi12bOY "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Multiple Timeframe Analysis 1 </div>
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
                src="https://www.youtube-nocookie.com/embed/h2jgVPJhY24 "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="cpinner2">
            <div>Multiple Timeframe Analysis 2 </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setState6(!state6)}
            >
              {state6 ? "Close" : "View"}
            </div>
          </div>
          {state6 ? (
            <div className="video">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube-nocookie.com/embed/_0ng-tyLgPI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}

          <div className="bflex">
            <Link to="/page3">
              <button className="pbut">Prev</button>
            </Link>

            <Link to="/page5">
              <button className="pbut">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
