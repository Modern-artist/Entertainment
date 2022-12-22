import React from 'react'

const SkillCard = ({ title = "heading",About = "fjed soluta sint sapiente ipsa! Recusandae velit corrupti quisquam excepturi iure vero hic illum quas totam amet", index = "num" }) => {
  return (
    <div className="SkillCard">
      <div className="sNum">
        <span>{index}</span>
      </div>
      <h3>{title}</h3>
      <p>{About}</p>
    </div>
  );
};

export default SkillCard