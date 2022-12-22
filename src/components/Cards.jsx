import React from 'react'
import { SiFreelancer } from "react-icons/si";

const Cards = ({title="Card Title",details="some details"}) => {
  return (
    <div className="review-card ">
      <div className="client">
        <h2 className="">{title}</h2>
        <span>Japan, Tokyo | Leave Street</span>
      </div>
      <p>
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        pariatur, cupiditate provident quam aspernatur debitis quia rerum ad
        beatae quos itaque totam accusantium veniam eveniet? Quasi, excepturi
        omnis?"{" "}
      </p>
      <div className="rating">
        <span>&#11089; &#11089; &#11089; &#11089; &#11089;</span>
      </div>
      <div className="abtClient">
        <div className="clientName">
          <img
            src="https://i.pinimg.com/564x/7a/e7/43/7ae743e5b7ca2a8b3b547ddde1586388.jpg"
            alt=""
          />
          <span>Naruto Uzumaki</span>
          
        </div>
          <p><SiFreelancer size={30} /></p>
      </div>
    </div>
  );
}

export default Cards