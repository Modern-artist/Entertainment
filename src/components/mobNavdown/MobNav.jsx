import React from 'react'
import './mobNav.scss'

import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { HiHome } from "react-icons/hi";

const MobNav = () => {
  return (
    <div className="MobNav">
      <div className="navlinks">
        <HiHome />
      </div>
      <div className="navlinks"><BsSearch /></div>
      <div className="navlinks"><BiMoviePlay /></div>
      <div className="navlinks"><MdOutlineLiveTv /></div>
      <div className="navlinks"><BsFillPersonFill /></div>
    </div>
  );
}

export default MobNav