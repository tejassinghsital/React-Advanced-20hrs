import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  let navStyle = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <>
      <div style={navStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {props.AboutDetails}
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                {/* <button
                  className="btn btn-primary mx-4"
                  id="darkBtn"
                  type="submit"
                >
                  DarkMode
                </button> */}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutDetails: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title or default",
  AboutDetails: "About",
};

export default Navbar;
