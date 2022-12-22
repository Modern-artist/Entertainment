import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdNightlight } from "react-icons/md";
import "./NavBar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngry } from "@fortawesome/free-solid-svg-icons";

// import { gsap } from "gsap";
import { gsap, Tween, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
import SplitType from "split-type";

const NavBar = () => {
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.onmousemove = (e) => {
      cursor.style.cssText = cursor2.style.cssText =
        "left:" + e.clientX + "px; top:" + e.clientY + "px;";
    };

    let mytext = new SplitType(".logoChar");
    gsap.to(mytext.chars, {
      y: "0%",
      duration: 2,
      stagger: 0.2,
      delay: 0.1,
    });

    const body = document.getElementsByTagName("body")[0];
    const light = document.getElementById("light");
    const dark = document.getElementById("dark");

    light.addEventListener("click", () => {
      light.classList.remove('active');
      dark.classList.add('active');
      body.classList.add("light");
      // for(var i = 0; i < serviceCard.length; i++){
      //   serviceCard[i].classList.remove("serCard");
      //   serviceCard[i].classList.add("newSerCard");
      // }
      gsap.to(".serviceCard", {
        // x: 0,
        // duration: 3,
        boxShadow: "18px 18px 36px #c9c9c9, -18px -18px 36px #ffffff",
        scale: 1.05,
        scrollTrigger: {
          // color:'blue',
          trigger: ".services",
          // pin: true,
          // markers: true,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
          ease: Power4.easeInOut,
        },
      });
    })
    dark.addEventListener("click", () => {
      dark.classList.remove("active");
      light.classList.add("active");
      body.classList.remove("light");
      // for (var i = 0; i < serviceCard.length; i++) {
      //   serviceCard[i].classList.remove("newSerCard");
      //   serviceCard[i].classList.add("serCard");
      // }
      gsap.to(".serviceCard", {
        // x: 0,
        // duration: 3,
        boxShadow: "12px 12px 24px #131313, -12px -12px 24px #292929",
        scale: 1.05,
        scrollTrigger: {
          // color:'blue',
          trigger: ".services",
          // pin: true,
          // markers: true,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
          ease: Power4.easeInOut,
        },
      });
    });

  }, []);


  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h1 className="logoChar">Hello</h1>
        </Link>
        <div className="navlinks">
          <Link to="/AllAchivements">Achivements</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Projects">Projects</Link>
        </div>
        <div className="theme">
          <MdLightMode color={"#fdc126"} id="light" className="mode active" />
          <MdNightlight id="dark" className="mode" />
        </div>
        {/* <div className="hamBurger">
          <FaBars size={28} color={"#c6c6c6"} />
        </div> */}
      </nav>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </header>
  );
};

export default NavBar;
