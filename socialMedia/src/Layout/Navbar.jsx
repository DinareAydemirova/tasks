/** @format */

import React from "react";
import "./Style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="/src/assets/Logo.png" alt="" />
        <div className="searchyoutube">
          <div className="inp">
            <input
              type="text"
              name=""
              id=""
              className="youtubesearch"
              placeholder="Search"
            />
            <img src="/src/assets/Group.svg" alt="" className="search" />
          </div>
          <img src="/src/assets/Icon.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
