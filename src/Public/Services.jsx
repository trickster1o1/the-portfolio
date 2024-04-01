import { BsCheckLg } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from "react";
export default function Services(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=> {
    gsap.to('.service-ani', {
      scrollTrigger: {
        trigger: '.service-ani',
        start: "top 55%",
        end: "bottom 27%",
        toggleActions: "restart reverse restart reverse"
      },
      y: -15,
      duration: 1,
      opacity: 1,
    });
  }, []);
  return (
    <div className="main-cont contact about custom-service service-ani" id='serv' ref={props.servRef}>
      <span>What I Offer</span>
      <h2 style={{ marginBottom: "1em" }}>Services</h2>
      <div className="abt-cont sv desktop">
        <div>
            <span className="sv-head">Web Development</span>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Modern web design implementaiton
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                 Dynamic structure and responsive web site development
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Rest API Development</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexbile web content integration</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Optimized Web Hosting</div>
        </div>
        <div>
            <span className="sv-head">App Development</span>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Dynamic app content architecture development
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                 Third Party Application Integration
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Rest API Implementation</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Application Performance Testing</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Secured backend connection</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexible application resource management</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Smooth UX development</div>
        </div>
        <div>
        <span className="sv-head">Web Application</span>
        <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Dynamic Resource Management system development
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                    Media Manager Integration
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Data Back Up initialization</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexbile web content integration</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Organized structure implementation</div>
        </div>
      </div>

      <div className="abt-cont skill-mob mobile">
      <Carousel indicators ={false} nextIcon={null} prevIcon={null} interval={4000} className='sv-mob'>
      <Carousel.Item>
      <div>
            <span className="sv-head">Web Development</span>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Modern web designe implementaiton
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                 Dynamic structure and responsive web site development
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Rest API Development</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexbile web content integration</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Optimized Web Hosting</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
            <span className="sv-head">App Development</span>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Dynamic app content architecture development
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                 Third Party Application Integration
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Rest API Implementation</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Application Performance Testing</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Secured backend connection</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexible application resource management</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Smooth UX development</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div>
        <span className="sv-head">Web Application</span>
        <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                Dynamic Resource Management system development
                </span>
            </div>
            <div>
                <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                <span>
                    Media Manager Integration
                </span>
            </div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Data Back Up initialization</div>
                <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Flexbile web content integration</div>
            <div>
            <BsCheckLg size={'.5em'} style={{'color':'rgba(98,148,185,255)', 'marginRight':'1em'}} />
                Organized structure implementation</div>
        </div>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  );
}
