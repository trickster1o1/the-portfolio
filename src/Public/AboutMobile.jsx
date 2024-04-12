import pp from "./qwe.jpg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function AboutMobile() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".mob-b-ani", {
        scrollTrigger: {
          trigger: ".mob-ani-trig",
          start: "top 35%",
          end: "bottom 0%",
          toggleActions: "restart reverse restart reverse",
        },
        duration: 0.5,
        scale: 0,
        opacity: 0,
        ease: "power2.inOut",
      });

      gsap.from(".mob-f-ani", {
        scrollTrigger: {
          trigger: ".mob-ani-trig",
          start: "top 35%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        duration: 1,
        rotate: 0,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.2,
      });

      gsap.from(".mob-txt-ani", {
        scrollTrigger: {
          trigger: ".mob-ani-trig",
          start: "top 35%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.5,
      });

      gsap.from(".mob-btn-ani", {
        scrollTrigger: {
          trigger: ".mob-ani-trig",
          start: "top 35%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.7,
      });

      gsap.from(".abtMob-subTxt-ani", {
        scrollTrigger: {
          trigger: ".mob-ani-trig",
          start: "top 35%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        text: "_",
        duration: 1,
        ease: "steps(11)",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="main-cont contact about mobile mob-ani-trig">
      <span className="abtMob-subTxt-ani">Get To Know</span>
      <h2 style={{ marginBottom: "1em" }}>About Me</h2>
      <div className="abt-cont">
        <div className="pp-layer">
          <div className="front-img mob-f-ani">
            <img src={pp} alt="Me" />
          </div>
          <div className="back-img mob-b-ani"></div>
        </div>
        <div className="abt-layer mob-txt-ani">
          <span>
            <p>
              I'm a recently graduated IT Student with 2 year of experience in
              full stack web and android app development with React, Flutter and
              Laravel looking forward to growing my experience with other
              enthusiastic developers such as myself.
            </p>
          </span>
        </div>
        <div className="exp-layer mob-btn-ani">
          <a
            href="#contact"
            className="btn-link"
            style={{ display: "block", marginTop: "2em" }}
          >
            <button>Let's Talk</button>
          </a>
        </div>
      </div>
    </div>
  );
}
