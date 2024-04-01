import { gsap } from "gsap";
import { useEffect } from "react";
import "./welcome.css";

export default function Welcome() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const showtxt = gsap.timeline({ defaults: { duration: ".1" } });
    showtxt.to("body", {
      overflowY: "hidden",
    });
    showtxt.to(".txt-appear", {
      visibility: 'visible',
    });
    showtxt.from(".txt-appear", {
      y: "127%",
      stagger: 0.2,
    });
    showtxt.to(".welcome-wipe", {
      bottom: "200%",
      duration: "1.5",
      delay: 0.2,
    });
    showtxt.to(".welcome-screen", {
      display: "none",
      delay: -1.2,
    });
    showtxt.to("body", {
      overflowY: "auto",
    });
  }, []);
  return (
    <>
      <div className="welcome-screen">
        <div>
          <span className="txt-appear">W</span>
          <span className="txt-appear">E</span>
          <span className="txt-appear">L</span>
          <span className="txt-appear">C</span>
          <span className="txt-appear">O</span>
          <span className="txt-appear">M</span>
          <span className="txt-appear">E</span>{" "}
          <span className="txt-appear">T</span>
          <span className="txt-appear">O</span>{" "}
          <span className="txt-appear">M</span>
          <span className="txt-appear">Y</span>{" "}
          <span className="txt-appear">P</span>
          <span className="txt-appear">O</span>
          <span className="txt-appear">R</span>
          <span className="txt-appear">T</span>
          <span className="txt-appear">F</span>
          <span className="txt-appear">O</span>
          <span className="txt-appear">L</span>
          <span className="txt-appear">I</span>
          <span className="txt-appear">O</span>
          <div className="txt-block"></div>
        </div>
      </div>
      <div className="welcome-wipe"></div>
    </>
  );
}
