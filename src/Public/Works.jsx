import secnepal from "./devs/secnepal.png";
import vastu from "./devs/vastu.png";
import chainge from "./devs/chainge.png";
import shiva from "./devs/shiva.png";
import jawhara from "./devs/jawhara.png";
import avani from "./devs/avani.png";
import pacific from "./devs/pacific.png";
import rugs from "./devs/rugs.png";
import sqc from "./devs/sqc.png";
import aaryaTM from "./devs/aaryaTM.jpeg";
import aaryaTravel from "./devs/aaryaTravel.png";
import honest from "./devs/honest.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Works(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-ani",
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      tm.from(".ani-show-img", {
        y: 25,
        duration: 0.8,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.2,
      });

      gsap.from(".work-subTxt-ani", {
        scrollTrigger: {
          trigger: ".work-ani",
          start: "top 55%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        text: "_",
        duration: 1,
        ease: "steps(15)",
      });
    });

    return () => ctx.revert();
  }, []);
  const data = [
    {
      name: "SEC Nepal",
      src: secnepal,
      url: "https://secnepal.org",
    },
    {
      name: "Vastu Hotel",
      src: vastu,
      url: "https://vastuhotel.com",
    },
    {
      name: "Pacific Engineering Co. Pvt. Ltd.",
      src: pacific,
      url: "https://pacificeng.com.np",
    },
    {
      name: "Jawhara Invest",
      src: jawhara,
      url: "https://jawharainvest.com",
    },
    {
      name: "Chainge Digital Pvt. Ltd.",
      src: chainge,
      url: "https://chaingedigital.com.np",
    },
    {
      name: "Avani Nepal",
      src: avani,
      url: "https://avaninepal.com",
    },
    {
      name: "Shiva Travels Pvt. Ltd.",
      src: shiva,
      url: "https://shivatravels.com.np",
    },
    {
      name: "NP Rugs",
      src: rugs,
      url: "https://www.nprugs.com",
    },
    {
      name: "SQC Education",
      src: sqc,
      url: "https://sqceducation.com",
    },
    {
      name: "Honest Forwarder",
      src: honest,
      url: "https://honestforwarder.com",
    },
    {
      name: "Aarya Village Travel Pvt. Ltd.",
      src: aaryaTravel,
      url: "https://www.aaryatravel.com",
    },
    {
      name: "Aarya Technology And Management",
      src: aaryaTM,
      url: "https://www.aaryatm.com",
    },
  ];
  return (
    <div
      className="main-cont container contact work-ani"
      id="work"
      ref={props.workRef}
    >
      <span className="work-subTxt-ani">Works I've Done</span>
      <h2 style={{ marginBottom: "1em" }}>My Works</h2>
      <div className="work-cont">
        {data
          ? data.map((d, index) => (
              <a
                key={index}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="ani-show-img"
              >
                <img
                  src={d.src}
                  alt={d.name}
                  width="auto"
                  height="auto"
                  title={d.name}
                />
              </a>
            ))
          : null}
      </div>
    </div>
  );
}
