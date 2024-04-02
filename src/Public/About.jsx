import pp from "./qwe.jpg";
import { TbBadge } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.back-img-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 0%",
          markers:true,
          toggleActions: "restart reverse restart reverse"
        },
        duration:.5,
        scale: 0,
        opacity: 0,
        ease:'power2.inOut'
      })

      gsap.from('.front-img-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        rotate: 0,
        opacity: 0,
        ease:'power2.inOut',
        delay: .2,
      })

      gsap.from('.ani-ex', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        opacity: 0,
        ease:'power2.inOut',
        delay: .5,
      })

      gsap.from('.ani-cl', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        opacity: 0,
        ease:'power2.inOut',
        delay: 1.1,
      })

      gsap.from('.ani-pj', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        y: 25,
        opacity: 0,
        ease:'power2.inOut',
        delay: 1.25,
      })
      gsap.from('.txt-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        y: 25,
        opacity: 0,
        ease:'power2.inOut',
        delay: 1.50,
      })

      
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="main-cont contact about desktop">
      <span>Get To Know</span>
      <h2 style={{ marginBottom: "1em" }} className="ani-trigg">
        About Me
      </h2>
      <div className="abt-cont">
        <div className="abt-left acnt">
          <div className="front-img front-img-ani">
            <img src={pp} alt="Me" />
          </div>
          <div className="back-img back-img-ani"></div>
        </div>
        <div className="abt-right acnt">
          <div className="right-top">
            <span className="contacts ani-ex">
              <TbBadge
                size={"1.5em"}
                style={{ color: "rgba(98,148,185,255)" }}
              />
              Experience
              <span>2+ Years Working</span>
            </span>
            <span className="contacts ani-cl">
              <BsFillPeopleFill
                size={"1.5em"}
                style={{ color: "rgba(98,148,185,255)" }}
              />
              Clients
              <span>10+ National</span>
            </span>
            <span className="contacts ani-pj">
              <GoProject
                size={"1.5em"}
                style={{ color: "rgba(98,148,185,255)" }}
              />
              Projects
              <span>15+ Completed</span>
            </span>
          </div>
          <div className="right-bot txt-ani">
            <span>
              I'm a recently graduated IT Student with 2 year of experience in
              full stack web and android app development with React, Flutter and
              Laravel looking forward to growing my experience with other
              enthusiastic developers such as myself. <br />
              <a
                href="#contact"
                className="btn-link"
                style={{ display: "block", marginTop: "2em" }}
              >
                <button>Let's Talk</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
