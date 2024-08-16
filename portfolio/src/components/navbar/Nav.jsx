import React from "react";
import { scroller } from "react-scroll"; // Add this line to import the 'scroller' module

import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container ">
        <h1>Sandra</h1>
        <ul className="list">
          <button onClick={() => {}}  >About</button>
          <button onClick={() => {}}>contact</button>
          <button>education</button>
            <button>projects</button>
            <button>skills</button>
        </ul>
      </div>
    </div>
  );
}
