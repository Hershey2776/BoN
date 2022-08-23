import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Svg/BoN.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 190) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={fix ? "nav__fixed font-face-lalita" : "nav font-face-lalita"}
      >
        <Link className="nav__logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="nav__text">
          <NavLink
            exact="true"
            className="Work"
            activeclassname="active"
            to="/"
          >
            Work
          </NavLink>
          <NavLink
            exact="true"
            className="AboutUs"
            activeclassname="active"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            exact="true"
            className="Contact"
            activeclassname="active"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
