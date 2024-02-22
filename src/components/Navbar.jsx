import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1 className="logo"> logo</h1>
        <ul>
          <li>
            {/* <a href="#"></a> */}
            <Link to={"/"}> home </Link>
          </li>
          <li>
            {/* <a href="#">about us</a> */}
            <Link to={"/about"}> about </Link>
          </li>
          <li>
            {/* <a href="#">contact us</a> */}
            <Link to={"/contact"}> contact us </Link>
          </li>
          <li>
            {/* <a href="#">setting</a> */}
            <Link to={"/setting"}> setting </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
