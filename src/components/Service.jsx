import React from "react";

export default function Service({
  title = "UI/UX Designer",
  img = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000&t=st=1667797691~exp=1667798291~hmac=c77befcd2c8b304dc274d0eafc45fa3f55209b3c69988706df65397e5afb16e0",
  para = "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum quo doloremque maxime sit deserunt.",
buttonText="Learn More",
btnUrl="some url"
}) {
  return (
    <div className="serviceCard serCard">
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{para}</p>
      <button>{buttonText}</button>
    </div>
  );
}
