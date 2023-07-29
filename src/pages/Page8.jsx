import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Page8() {
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
                src="https://www.youtube-nocookie.com/embed/aHmgyRd48S0 "
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

            <button className="pbut">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
