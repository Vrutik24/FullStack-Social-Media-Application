import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
            <h1 className="logo">NETFLIX</h1>
          </Link>
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/series" className="link">
            <span>TV Shows</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon />
          <span>Children</span>
          <NotificationsIcon />
          <img
            src="https://th.bing.com/th/id/OIP.lt6xlJQJ6xhJFMOiE8m-NQHaEK?pid=ImgDet&w=1080&h=608&rs=1"
            alt="Profile"
          />
          <div className="profile">
            <ArrowDropDownIcon />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
