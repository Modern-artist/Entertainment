import React from "react";
import NavBar from "../../components/NavBar";
import bg from "../../assets/winner.jpeg";
import "./Achive.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const achive = () => {
  return (
    <div>
      <div className="fullPgAchivement">
        <NavBar />
        <div className="Achivements">
          <div className="achHead">
            <h2 className="Subheading">
              Won SIH 2022 | India Biggest Hackathon
            </h2>
            <h1 className="Aheading">WINNER WINNER AND CHICKEN DINNER</h1>
            <img className="bgImg" src={bg} alt="" />
            <div className="bgGrad"></div>
          </div>
          <div className="aboutAchive">
            <p>
              One of the achievements which added feather to the crown of my
              progress in the arena of web development is participation in the
              national level hackathon conducted by government of India.{" "}
            </p>
            <ul>
              <li>
                My role in team was to design and develop the front-end portion
                of the web site.
              </li>
              <li>
                The project developed by our team appeared out to be the finest
                among those presented by all the teams.
              </li>
              <li>
                The opportunity of participating and winning the hackathon added
                exceptional experiences.
              </li>
            </ul>
            <div className="moreLinks">
              {/* <Link to="/">
              <FaInstagram size={50} color="ghostwhite" />
            </Link> */}
              <Link to="/">
                <FaLinkedin size={35} color="ghostwhite" />
              </Link>
              <Link to="/">
                <FaInfoCircle size={35} color="ghostwhite" />
              </Link>
              <Link to="/">
                <FaGithub size={35} color="ghostwhite" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default achive;
