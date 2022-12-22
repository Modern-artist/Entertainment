import React, { useEffect } from "react";
import "./Skills.css";

import NavBar from "../../components/NavBar";
import { FaReact } from "react-icons/fa";
import SkillCard from "../../components/SkillCard";
const Skills = () => {
  var skillDetails = [
    {
      title: "Figma",
      About:
        "lorem Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    { title: "React JS" },
    { title: "SCSS" },
    { title: "Django" },
    { title: "AI / XD of Adobe" },
    { title: "HTML/CSS" },
    { title: "Tailwind" },
    { title: "Python" },
    { title: "GSAP animations" },
  ];
  return (
    <div>
      <NavBar />
      <div className="allSkills">
        {skillDetails.map((x, i) => (
          <SkillCard title={x.title} index={i + 1} About={x.About} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
