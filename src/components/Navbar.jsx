import React from "react";
import "./Navbar.css";
const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="text">
        <h2>GeeksGallery</h2>
      </div>
      <div className="input">
        <input type="text" placeholder="Search Images" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
