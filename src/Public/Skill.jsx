import { HiBadgeCheck } from "react-icons/hi";
import Carousel from "react-bootstrap/Carousel";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Skill(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".ani-right", {
        scrollTrigger: {
          trigger: ".skill-ani-trig",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        opacity: 0,
        x: 200,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.from(".ani-leftt", {
        scrollTrigger: {
          trigger: ".skill-ani-trig",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        opacity: 0,
        x: -200,
        duration: 1,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".mob-skill-ani", {
        scrollTrigger: {
          trigger: ".mob-skill-trig",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="main-cont contact about custom-skill"
      id="exp"
      ref={props.expRef}
    >
      <span>What Skills I Have</span>
      <h2 style={{ marginBottom: "1em" }}>My Experience</h2>
      <div className="abt-cont desktop skill-ani-trig">
        <div className="abt-left acnt-sk ani-leftt">
          <span className="front-end sk">
            <h5 className="head-sk">Frontend Development</h5>
            <div className="exp">
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    HTML5
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    CSS3
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    JavaScript
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>

              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    Ajax
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    Flutter
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>

              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    React
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
            </div>
          </span>
        </div>
        <div className="abt-right acnt-sk ani-right">
          <span className="back-end sk">
            <h5 className="head-sk">Backend Development</h5>
            <div className="exp">
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    PHP
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    Laravel
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    MySql
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Experienced
                </div>
              </span>

              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    Python
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Intermidiate
                </div>
              </span>
              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    MongoDB
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Intermidiate
                </div>
              </span>

              <span>
                <div>
                  <h5 className="sub-head-sk">
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,255)",
                        marginRight: "1em",
                      }}
                    />
                    Node
                  </h5>
                </div>
                <div>
                  <h5 style={{ display: "inline" }}>
                    <HiBadgeCheck
                      style={{
                        color: "rgba(98,148,185,0)",
                        marginRight: "1em",
                      }}
                    />
                  </h5>
                  Intermidiate
                </div>
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="abt-cont mobile skill-mob mob-skill-trig">
        <Carousel
          indicators={false}
          nextIcon={null}
          prevIcon={null}
          className=" mob-skill-ani"
        >
          <Carousel.Item interval={2000}>
            <span className="front-end sk">
              <h5 className="head-sk">Frontend Development</h5>
              <div className="exp">
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      HTML5
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      CSS3
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      JavaScript
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>

                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      Ajax
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      Flutter
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>

                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      React
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
              </div>
            </span>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <span className="back-end sk">
              <h5 className="head-sk">Backend Development</h5>
              <div className="exp">
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      PHP
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      Laravel
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      MySql
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Experienced
                  </div>
                </span>

                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      Python
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Intermidiate
                  </div>
                </span>
                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      MongoDB
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Intermidiate
                  </div>
                </span>

                <span>
                  <div>
                    <h5 className="sub-head-sk">
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,255)",
                          marginRight: "1em",
                        }}
                      />
                      Node
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ display: "inline" }}>
                      <HiBadgeCheck
                        style={{
                          color: "rgba(98,148,185,0)",
                          marginRight: "1em",
                        }}
                      />
                    </h5>
                    Intermidiate
                  </div>
                </span>
              </div>
            </span>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
