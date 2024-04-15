import pp from "./qwe.jpg";
import { TbBadge } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useEffect } from "react";

export default function About() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.back-img-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
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
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
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
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
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
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        opacity: 0,
        ease:'power2.inOut',
        delay: .7,
      })

      gsap.from('.ani-pj', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        y: 25,
        opacity: 0,
        ease:'power2.inOut',
        delay: .8,
      })
      gsap.from('.txt-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
          toggleActions: "restart reverse restart reverse"
        },
        duration:1,
        y: 25,
        opacity: 0,
        ease:'power2.inOut',
        delay: 1,
      })


      gsap.from('.abt-subTxt-ani', {
        scrollTrigger: {
          trigger: '.ani-trigg',
          start: "top 55%",
          end: `+=${document.querySelector('.ani-trigg').offsetHeight + 275} 0%`,
          toggleActions: "restart reverse restart reverse"
        },
        text: "_",
        duration:1,
        ease: "steps(11)"
      })
      
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="main-cont contact about desktop">
      <span className="abt-subTxt-ani">Get To Know</span>
      <h2 style={{ marginBottom: "1em" }} className="ani-trigg">
        About Me
      </h2>
      <div className="abt-cont abt-desk-cont">
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
              <span>3+ Years Working</span>
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
              I'm a recently graduated IT Student with more than 3 years of experience in
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
