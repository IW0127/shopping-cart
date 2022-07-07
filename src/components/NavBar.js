import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { CgShoppingCart } from "react-icons/cg";

function NavBar() {
  const dropDownStyle = {
    right: 0,
    left: "auto",
  };
  return (
    <nav className="navbar sticky-top" style={{ background: "#383838" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width={40} alt="logo" />
          <span className="fw-bold" style={{ color: "#c463e8" }}>
            {" "}
            Shopping
          </span>
        </Link>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Searching product hear"
          aria-label="Search"
          style={{ width: "500px" }}
        />
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <CgShoppingCart color="#fff" fontSize="25px" />
            10
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start "
            style={dropDownStyle}
          >
            <li>
              <Link className="dropdown-item" to="/">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Something else here
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Separated link
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
