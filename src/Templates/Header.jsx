import React from 'react';

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
                <a className="nav-link active" aria-current="page" href="#">
                  {props.navitem1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.navitem2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.navitem3}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.navitem4}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.navitem5}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.navitem6}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      React Topics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      React UI Libraries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      React Form Libraries
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      React Redux
                    </a>
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
