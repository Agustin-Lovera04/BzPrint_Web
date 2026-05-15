import { Link, NavLink } from "react-router-dom";
import "./Navbar_Style.css";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart_Context";

const Navbar = () => {
  const { contador } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2">
      <div className="container-fluid">
        <div className="col-2">
          <Link to={"/"}>
            <img
              src="./images/BZPrint-Logo.png"
              alt="logo"
              className="brand_image_navbar"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <div className="col-8 d-flex justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to={"/impresiones"} className="nav-link">
                  Impresiones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/libreria"} className="nav-link">
                  Libreria
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <div className="icon_cart_navbar">
              <Link to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="#FFDD88"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </Link>
            </div>
            <div className="count_cart_navbar fw-bold align-items-center">
              {contador()}
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-start fade"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-light"
              id="offcanvasNavbarLabel"
            >
              Menú
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className=" d-flex justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink to={"/impresiones"} className="nav-link">
                    Impresiones
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/libreria"} className="nav-link">
                    Libreria
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <div className="icon_cart_navbar">
                <Link to={"/cart"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#FFDD88"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </Link>
              </div>
              <div className="count_cart_navbar fw-bold align-items-center">
                {contador()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
