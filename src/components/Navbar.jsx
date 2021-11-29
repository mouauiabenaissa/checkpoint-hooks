import { React } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const state = useSelector((state) => state.handleFavoris);
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-2 fw-bold" to="/">
            My Movies
          </NavLink>
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
            className="collapse navbar-collapse d-flex justify-content-sm-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-3 d-flex align-items-center">
                <NavLink
                  className="nav-link active fs-4"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa fa-home" style={{ color: "black" }}>
                    {" "}
                    Home
                  </i>
                </NavLink>
              </li>
              <li className="nav-item ms-3 d-flex align-items-center">
                <NavLink className="nav-item fs-4" to="/favoris">
                  <i className="fa fa-thumbs-up" style={{ color: "black" }}>
                    {" "}
                    Favoris({state.length})
                  </i>
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link fs-4" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
