import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar navbar-dark"
        style={{ backgroundColor: 'rgb(7 17 26)' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>Shubham</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get API Data
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to="/fetchmethod" className="dropdown-item">
                      Fetch Method
                    </Link>
                  </li>
                  <li>
                    <Link to="/axiosmethod" className="dropdown-item" href="#">
                      Axios Method
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/trycatchmethod"
                      className="dropdown-item"
                      href="#"
                    >
                      Try Catch Method
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
