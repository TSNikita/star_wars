import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/images/Logo (3).png";

import "./styles.scss";

const Header = ({ onClick }) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <div className="header">
      <div className="header_info">
        <div className="header_logo">
          <img src={Logo} alt="logo_png" />
        </div>

        <div className="header_menu">
          <ul>
            <NavLink
              className={splitLocation[1] === "" ? "activeLink" : ""}
              to="/"
            >
              Home
              <div className="link_line"></div>
            </NavLink>

            <NavLink
              onClick={onClick}
              className={splitLocation[1] === "characters" ? "activeLink" : ""}
              to="characters"
            >
              Characters
              <div className="link_line"></div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
