import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-light warning-color lighten-5">
    <ul className="navbar-nav mr-auto">
      <li>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/addFilm"} className="nav-link">
          Add film
        </Link>
      </li>
      <li>
        <Link to={"/addFile"} className="nav-link">
          Add file
        </Link>
      </li>
      <li>
        <Link to={"/searchFilm"} className="nav-link">
          Search film
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
