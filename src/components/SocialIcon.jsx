import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialIcon = () => {
  return (
    <div className="expSocialMedia">
      <Link to="/">
        <FaFacebook size={40} color="#707070"  />
      </Link>
      <Link to="/">
        <FaLinkedin size={40} color="#707070" />
      </Link>
      <Link to="/">
        <FaGithub size={40} color="#707070" />
      </Link>
      <Link to="/">
        <FaInstagram size={40} color="#707070" />
      </Link>
    </div>
  );
}
