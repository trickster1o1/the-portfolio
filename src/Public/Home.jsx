import { useState } from "react";
import Contact from "./Contact";
import "./main.css";
import { RiGithubFill, RiLinkedinBoxFill, RiGitlabLine } from "react-icons/ri";
import me from "./me.png";
import cv from "./cv.pdf";
import About from "./About";
import Skill from "./Skill";
import Services from "./Services";
import {
  BsPersonCircle,
  BsFillHouseFill,
  BsFillBarChartLineFill,
  BsServer,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import AboutMobile from "./AboutMobile";
function Home() {
  const [location, setLocation] = useState("home");
  return (
    <>
      <div className="main-cont top-cont" id="home">
        <span>Hello, I'm</span>
        <h2>Nischal Tuladhar</h2>
        <span className="fade-text">Fullstack Developer</span>
        <div className="main-btns">
          <a href={cv} className="btnA" download>
            <button>Download CV</button>
          </a>
          <a href="#contact" className="btn-link">
            <button>Let's Talk</button>
          </a>
        </div>

        <div className="space-cont"></div>
        <div className="img-cont">
          <span>
            <img src={me} alt="nope" />
          </span>
        </div>
        <span className="b-media">
          <RiGithubFill
            style={{ color: "rgba(98,148,185,255)", marginBottom: "1em" }}
          />{" "}
          <br />
          <RiLinkedinBoxFill
            style={{ color: "rgba(98,148,185,255)", marginBottom: "1em" }}
          />{" "}
          <br />
          <RiGitlabLine
            style={{ color: "rgba(98,148,185,255)", marginBottom: "1em" }}
          />{" "}
          <br />
          <span>
            <hr style={{ transform: "rotate(90deg)" }} />
          </span>
        </span>
        <span className="scroller">
          <a href="#contact">Scroll Down</a>
        </span>
      </div>
      <div id="about">
        <About />
        <AboutMobile /> {/* Mobile Manipulation */}
      </div>
      <Skill />
      <Services />
      <Contact />

      <div className="fix-nav">
        <span
          style={{
            backgroundColor:
              location === "home" ? "rgba(23,23,41,255)" : "rgba(23,23,41,0)",
          }}
        >
          <a href="#home" onClick={() => setLocation("home")}>
            <BsFillHouseFill size={"1.5em"} />
          </a>
        </span>
        <span
          style={{
            backgroundColor:
              location === "about" ? "rgba(23,23,41,255)" : "rgba(23,23,41,0)",
          }}
        >
          <a href="#about" onClick={() => setLocation("about")}>
            <BsPersonCircle size={"1.5em"} />
          </a>
        </span>
        <span
          style={{
            backgroundColor:
              location === "exp" ? "rgba(23,23,41,255)" : "rgba(23,23,41,0)",
          }}
        >
          <a href="#exp" onClick={() => setLocation("exp")}>
            <BsFillBarChartLineFill size={"1.5em"} />
          </a>
        </span>
        <span
          style={{
            backgroundColor:
              location === "serv" ? "rgba(23,23,41,255)" : "rgba(23,23,41,0)",
          }}
        >
          <a href="#serv" onClick={() => setLocation("serv")}>
            <BsServer size={"1.5em"} />
          </a>
        </span>
        <span
          style={{
            backgroundColor:
              location === "contact"
                ? "rgba(23,23,41,255)"
                : "rgba(23,23,41,0)",
          }}
        >
          <a href="#contact" onClick={() => setLocation("contact")}>
            <BsFillPersonLinesFill size={"1.5em"} />
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
