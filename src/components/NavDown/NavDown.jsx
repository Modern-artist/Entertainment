import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./navDown.scss";

const NavDown = ({callbackFunction = () => {}}) => {
  return (
    <div className="NavDown">
      <Link className="navEle">
        <Link
          className="navLinks"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          All
        </Link>
        <Link
          className="navLinks"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => callbackFunction("movie")}
        >
          Movies
        </Link>
        <Link
          className="navLinks"
          onClick={() => callbackFunction("tv")}
          style={{ textDecoration: "none", color: "white" }}
        >
          Web Series
        </Link>
        <Link
          className="navLinks"
          to="/underDevelopment"
          style={{ textDecoration: "none", color: "white" }}
        >
          Anime
        </Link>
        <div className="searchBar">
          Search
          <BsSearch />
        </div>
      </Link>
    </div>
  );
};

export default NavDown