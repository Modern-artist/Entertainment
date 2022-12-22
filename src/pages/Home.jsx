// importing esscincials

import React, { useEffect } from "react";
import "./HomeStyle.css";
import logo from "../assets/ProfileImg.png";
import NavBar from "../../src/components/NavBar";
import Footer from "../components/footer";
import Skills from "../pages/skills/Skills";
import { Link } from "react-router-dom";
import bubble from "../assets/bubble.png";
import multiSkill from "../assets/img1.png";
import Service from "../components/Service";
import { SocialIcon } from "../components/SocialIcon";
// importing icons

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  MdOutlineNavigateNext,
  MdOutlineNavigatePrevious,
} from "react-icons/md";

import {motion as m} from "framer-motion";

// importing gsap

import { gsap, Tween, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
import Cards from "../components/Cards";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.onmousemove = (e) => {
      cursor.style.cssText = cursor2.style.cssText =
        "left:" + e.clientX + "px; top:" + e.clientY + "px;";
    };
    var doc = document.querySelector(".containar");
    var myImg = document.querySelector(".myImg");

    // declaring array for the cards

    doc.onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      myImg.style.setProperty("--x", `${x}px`);
      myImg.style.setProperty("--y", `${y}px`);
    };

    // var mulpg = document.querySelector(".mainpg");
    // var mulImg = document.querySelector(".skillImg");
    // mulpg.onmousemove = (e) => {
    //   const x = e.pageX/60 ;
    //   const y = e.pageY/60 ;
    //   mulImg.style.transform = "translate(" + x + "px) translateY(" + y + "px)"
    // };
    // var mulpg = document.querySelector(".containar");
    // var mulImg = document.querySelector(".backname");
    // mulpg.onmousemove = (e) => {
    //   const x = e.pageX / 60;
    //   const y = e.pageY / 60;
    //   mulImg.style.transform =
    //     "rotate(-90deg) top: 24% translate(" +
    //     x +
    //     "px) translateY(" +
    //     y +
    //     "px)";
    // };
  }, []);

  useEffect(() => {
    gsap.to(".backname", {
      y: 70,
      duration: 3,
      opacity: 0.2,
    });
    gsap.to(".bubble", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".allExp",
        // markers: true,
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".backname", {
      y: 70,
      duration: 3,
      opacity: 0.2,
    });
    gsap.to(".aboutText ", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".aboutText",
        // markers: true,
        scrub: 1,
        end: "bottom 600px",
      },
    });
    gsap.to(".serCard", {
      // x: 0,
      // duration: 3,
      boxShadow: "16px 16px 32px #151515, -16px -16px 32px #272727",
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
    // gsap.to(".newSerCard", {
    //   // x: 0,
    //   // duration: 3,
    //   boxShadow: "18px 18px 36px #c9c9c9, -18px -18px 36px #ffffff",
    //   scale: 1.05,
    //   scrollTrigger: {
    //     // color:'blue',
    //     trigger: ".services",
    //     // pin: true,
    //     // markers: true,
    //     scrub: 1,
    //     start: "top 80%",
    //     end: "bottom 80%",
    //     ease: Power4.easeInOut,
    //   },
    // });
    gsap.to(".moreText", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".aboutText",
        // markers: true,
        scrub: 1,
        end: "bottom 600px",
      },
    });

    const myImg = document.querySelector(".myImg");
    const t1 = new Timeline();
    t1.fromTo(
      myImg,
      0.6,
      { height: "8vw", width: "8vw" },
      {
        height: "10vw",
        width: "10vw",
        ease: Power4.easeInOut,
      }
    );
  }, []);
      var cardsDetails = [
        { title: "Form Builder" },
        { title: "GST Calculator" },
        { title: "Rapid Sazam Player" },
        { title: "MUN Command" },
        { title: "EDU - Bird" },
        { title: "Crpyto Infographer" },
      ];

  return (
    <div>
      <div className="loader"></div>
      <div className="containar">
        <NavBar />
        <div className="profile">
          <div className="grad">
            <img className="myImg" src={logo} alt="" />
          </div>
          <div className="backname">
            <span>FLEKENSTINE</span>
          </div>
          <div className="backnameTwo">
            <span className="hiText">
              HI! THERE <br /> THIS IS PREM.
            </span>
            <br />
          </div>
          <div className="heading">
            <h1 className="introHead">
              I am{" "}
              <span className="tal" style={{ color: "#fdc126", opacity: "1" }}>
                PREM KUMAR
              </span>{" "}
               <br />{" "}
              & 
              <span className="tal" style={{ color: "#fdc126" }}>
                UI/UX Designer.
              </span>
            </h1>
          </div>
          <SocialIcon />
          <button className="hireBtn">Hire me!</button>
          <div className="boxArw">
            <CgScrollV size={40} color="#fdc126" />
          </div>
          <span className="Scroll">Scroll Down</span>
        </div>
      </div>
      {/* <img src="{bubble}" alt="" /> */}
      <img className="bubble" src={bubble} alt="" />
      <div className="mainpg">
        {/* <div className="squBg1"></div>
        <div className="squBg2"></div> */}
        <div className="skillIntro">
          <div className="skillIntroHeading">
            <h1>
              A good <span style={{ color: "#fdc126" }}>Entrepreneur</span>{" "}
              converts skills <br /> to cash.
            </h1>
          </div>
          <p>
            Hi! my name is Prem Kumar. I am a first-year BTech student at BIT
            Sindri. I live in Jamshedpur, Jharkhand, India.<br></br>
            <br></br>
          </p>
          <button className="resumeBtn">My resume</button>
        </div>
        <div className="skillImg">
          <img src={multiSkill} alt="" />
        </div>
      </div>
      {/* <div className="grad">
      </div> */}
      <div className="allExp">
        <center>
          <h1 className="subHeading">My Experince</h1>
        </center>
        <div className="myExp">
          <div className="slidImg glass">
            <div className="glassCont">
              <h2>SWIFT DEVELOPER</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                dolorum nemo natus deleniti veniam eius quas quod!
                Exercitationem aut veniam neque. Consectetur rem numquam,
                repudiandae deleniti illo voluptatem ipsum saepe!
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque iusto ad doloribus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit ajn
                  ksnak .
                </li>
              </ul>
            </div>
          </div>
          <div className="slideExp">
            <div className="slideBtns">
              <div className="slideBtnLeft glass" style={{ color: "#fff" }}>
                <MdOutlineNavigateNext color="#fffff" />
              </div>
              <div className="slideBtnRight glass" style={{ color: "#fff" }}>
                <MdOutlineNavigateNext color="#fffff" />
              </div>
            </div>
            <div className="expImg">
              <img src="" alt="" />
            </div>
            {/* <div className="expAbout">
              <h1>Event managment web application for our collage.</h1>
            </div> */}
            <center>
              <div
                className="expSocialMedia glass"
                style={{ boxShadow: "none" }}
              >
                <Link to="/">
                  <FaFacebook size={40} color="#707070" />
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
            </center>
          </div>
        </div>
      </div>
      <div className="aboutMe">
        <div className="aboutText">
          <h1>Back-End development</h1>
          <p>
            Back-end development refers to the development of server-side logic
            that powers websites and apps from behind the scenes. It includes
            all the code needed to build out the database, server, and
            application. From database migrations to API integrations to setting
            up the server-side technologies that make a website tick, a back-end
            web developer may be the talent you need to get your next web
            project off the ground
          </p>
          <center>
            <SocialIcon />
          </center>
        </div>
        <div className="gooey">
          {/* <h2>
            Hire<br></br> me!
          </h2> */}
        </div>
        <div className="moreText aboutText">
          <h1>Front-End development</h1>
          <p>
            Back-end development refers to the development of server-side logic
            that powers websites and apps from behind the scenes. It includes
            all the code needed to build out the database, server, and
            application. From database migrations to API integrations to setting
            up the server-side technologies that make a website tick, a back-end
            web developer may be the talent you need to get your next web
            project off the ground
          </p>
          <center>
            <SocialIcon />
          </center>
        </div>
      </div>
      <div className="serSec">
        <h1 className="subHeading">My Services.</h1>
        <div className="services">
          <Service className="serCard" />
          <Service
            className="serCard"
            title="Front-End"
            img="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?w=1800"
            para="Deserunt amet anim est nostrud deserunt amet consequat dolor."
          />
          <Service
            className="serCard"
            title="Back-End"
            img="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=1800&t=st=1667798586~exp=1667799186~hmac=bdef43767a7f3cf35c900625dfb6993c1a5f47b871ccf492cee31e1c241529be"
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptatum quo doloremque maxime sit deserunt."
          />
          {/* <Service
            className="serCard"
            title="Graphic Designer"
            img="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=1800&t=st=1667798586~exp=1667799186~hmac=bdef43767a7f3cf35c900625dfb6993c1a5f47b871ccf492cee31e1c241529be"
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptatum quo doloremque maxime sit deserunt."
          /> */}
        </div>
      </div>
      <div className="review">
        <div className="revhead">
          <div className="reviewAbt">
            <h1>
              What our client <br /> Says!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis impedit, assumenda beatae ullam molestias mollitia
              suscipit ad tenetur perferendis maxime ea dolor eligendi, aliquid
              vitae id.
            </p>
          </div>
          <div className="bigCard">
            <Cards />
          </div>
        </div>
        <div className="revCards">
          {cardsDetails.map((x) => (
            <Cards title={x.title} />
          ))}
        </div>
      </div>
      <Footer />
      {/* <div className="extra"></div> */}
    </div>
  );
};

export default Home;
