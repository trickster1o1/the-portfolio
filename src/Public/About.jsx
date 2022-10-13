import pp from './qwe.jpg';
import { TbBadge } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
export default function About() {
    return (
        <div className="main-cont contact about desktop">
            <span>Get To Know</span>
            <h2 style={{'marginBottom':'1em'}}>About Me</h2>
            <div className="abt-cont">
                <div className="abt-left acnt">
                    <div className='front-img'>
                        <img src={pp} alt="Me" />
                    </div>
                    <div className='back-img'>
                    </div>
                </div>
                <div className="abt-right acnt">
                    <div className='right-top'>
                    <span className="contacts">
                    <TbBadge size={'1.5em'} style={{'color':'rgba(98,148,185,255)'}} />
                            Experience
                        <span>
                            2+ Years Working
                        </span>
                    </span>
                    <span className="contacts">
                    <BsFillPeopleFill size={'1.5em'} style={{'color':'rgba(98,148,185,255)'}} />
                            Clients
                        <span>
                            10+ National
                        </span>
                    </span>
                    <span className="contacts">
                    <GoProject size={'1.5em'} style={{'color':'rgba(98,148,185,255)'}} />
                            Projects
                        <span>
                            15+ Completed
                        </span>
                    </span>
                    </div>
                    <div className='right-bot'>
                        <span>I'm a recently graduated IT Student with 1 year of experience in full stack web development with React and Laravel looking forward to growing my experience with other enthusiastic developers such as myself. <br />
					    <a href='#contact' className='btn-link' style={{'display':'block','marginTop':'2em'}}><button>Let's Talk</button></a>
                        </span>                    
                    </div>
                </div>
            </div>
        </div>
    );
}