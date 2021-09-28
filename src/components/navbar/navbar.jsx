import "./navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <>
      <header id="header">
        <div id="navbar" className="container h-flex">
          <div className="logo">
            <h1>VoteNow</h1>
          </div>
          <nav id="nav-bar">
            <ul id="navigation">
              <li>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#working">
                  Working
                </a>
              </li>

              <li>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Merch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
