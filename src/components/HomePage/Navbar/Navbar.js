import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class=" navbar navbar-expand-lg navbar-light navbar-bg sticky-top t-0 bg-color p-4">
      <div class="container-fluid">
        <div>
          <img
            className="brand-image mx-5"
            src="https://braina.live/images/brainalive.png"
            alt="BrainAlive"
          />
        </div>

        <button
          class="navbar-toggler toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mx-auto nav-ui-items d-flex justify-content-between">
            <li className="nav-item homeTab">
              <Link className="navItem homeTab" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item navItem">
              <Link className="navItem" to="/home">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navItem" to="/focii">
                FOCII
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navItem" to="/home">
                Scrience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navItem" to="/home">
                Blog
              </Link>
            </li>
          </ul>
          <div>
            <button className="demo-btn mx-4 fw-bold">Get free demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
