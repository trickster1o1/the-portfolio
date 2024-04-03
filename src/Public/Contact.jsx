import { AiOutlineMail } from "react-icons/ai";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Contact(props) {
  gsap.registerPlugin(ScrollTrigger);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const contactMe = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.msg) {
      setError("Please fill all the fields");
    } else {
      setError("");
      emailjs
        .sendForm("gmail", "template_yd2umv6", e.target, "cioMD6HpOHdTxNtsC")
        .then((r) => {
          console.log(r);
          e.target.reset();
          setMsg("Thank You For Contacting");
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".cont-ani-trig",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      tm.to(".c-ani", {
        opacity: 1,
        stagger: 0.2,
        duration:1,
        ease: 'power2.inOut'
      }).to(".in-ani", {
        opacity: 1,
        stagger: 0.2,
        duration:1,
        y: 25,
        delay: -1,
        ease: 'power2.inOut'
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="main-cont contact cont-ani-trig"
      id="contact"
      ref={props.contactRef}
    >
      <span>Get In Touch</span>
      <h2 style={{ marginBottom: "1em" }}>Contact Me</h2>
      <div className="sub-cont">
        <div className="smedia-mob">
          <span
            className="contacts c-ani"
            onClick={() => {
              document.getElementById("mail").click();
            }}
          >
            <a
              href="mailto:nischaltuladhar15@gmail.com"
              rel="noreferrer"
              target="_blank"
              style={{ display: "none" }}
              id="mail"
            >
              #
            </a>
            <AiOutlineMail size={"1.5em"} />
            Email
            <span>nischaltuladhar15@gmail.com</span>
            <span>send a message</span>
          </span>
          <span
            className="contacts c-ani"
            onClick={() => {
              document.getElementById("fb").click();
            }}
          >
            <a
              href="https://www.facebook.com/trickster1o1"
              target="_blank"
              rel="noreferrer"
              style={{ display: "none" }}
              id="fb"
            >
              #
            </a>
            <RiFacebookBoxLine size={"1.5em"} />
            Facebook
            <span>trickster1o1</span>
            <span>send a request</span>
          </span>
          <span
            className="contacts c-ani"
            onClick={() => {
              document.getElementById("ig").click();
            }}
          >
            <a
              href="https://www.instagram.com/_trick5t3r_/"
              target="_blank"
              rel="noreferrer"
              style={{ display: "none" }}
              id="ig"
            >
              #
            </a>
            <RiInstagramLine size={"1.5em"} />
            Instagram
            <span>_trick5t3r_</span>
            <span>give me a follow</span>
          </span>
        </div>
        <div>
          <form onSubmit={contactMe}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="in-ani"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="in-ani"
            />
            <textarea
              cols="30"
              name="msg"
              rows="5"
              placeholder="Your Message"
              onChange={(e) => setData({ ...data, msg: e.target.value })}
              className="in-ani"
            ></textarea>
            {msg ? <small>{msg}</small> : error ? <small>{error}</small> : null}
            <button className="in-ani">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
