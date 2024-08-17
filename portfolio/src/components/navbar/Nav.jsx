// import React from "react";


import "./Nav.css";

export default function Nav() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid">
      <hi>Sandra Sanders</hi>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">About</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
              <li><a className="dropdown-item" href="#">Education</a></li>
              <li><a className="dropdown-item" href="#">Projects</a></li>
              <li><a className="dropdown-item" href="#">Skills</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    );  
}
