import React from "react";
import { Link } from "react-router-dom";

// const Cards = ({title="Card Title",details="some details"}) => {
const EachAch = ({title="Achivements Title",details="some details",index=0}) => {
  return (
    <div>
      <div className={`achBlocks ${index%2==1?"rev":""}`} >
        <div className="achHeadImg">
          <div className="achHeading">
            <span>{title}</span>
          </div>
          <div className="achImg"></div>
        </div>
        <div className="AboutAchive">
          <div className="AboutAchiveInfo">
            <h2>About Achivement.</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              nam cum sed necessitatibus eius, provident accusamus laboriosam
              illum a repudiandae quas, eos in possimus sapiente natus eligendi
              laudantium aliquid assumenda? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas, corporis repudiandae officiis
              soluta, quia nesciunt unde assumenda ratione minima eligendi
              itaque ad sit at voluptate quae, libero veritatis voluptatibus
              explicabo ut vitae doloribus rem voluptas. Dolorem nobis
              assumenda, est saepe at voluptates officiis quis eligendi iste
              earum, velit esse minus laboriosam odit impedit commodi mollitia
              rerum beatae possimus nulla! Laborum recusandae ratione non enim
              voluptatum odit distinctio quis, nostrum quas cumque similique.
              Aliquid ipsa aut eligendi laborum quod ullam officiis. Dolorem
              nobis assumenda, est saepe at
            </span>
          </div>

          <center>
            {/* <button  onClick={}> */}
              <Link className="viewAchBtn" to="/Achivement">Projects</Link>
            {/* </button> */}
          </center>
        </div>
      </div>
    </div>
  );
}

export default EachAch;
