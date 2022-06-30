import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <Link to="" className="navbar-brand">
          <span className="text-dark">CRUD With React</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/add" className="btn btn-light w-25">
          Add Users
        </Link>
      </div>
    </nav>
  );
}
