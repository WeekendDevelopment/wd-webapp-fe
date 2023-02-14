import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogout, SlHome } from "react-icons/sl";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <SlHome size={28} />
      </Link>
      <Link to="/profile">
        <SlUser size={28} />
      </Link>
      <Link to="/">
        {/* add logout logic to properly dispose jwt token and session variables */}
        <SlLogout size={28} />
      </Link>
    </div>
  );
}
