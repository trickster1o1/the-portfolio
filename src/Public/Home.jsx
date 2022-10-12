import {useEffect} from 'react';
import Contact from './Contact';
import './main.css';
import { RiGithubFill, RiLinkedinBoxFill,RiGitlabLine} from "react-icons/ri";
import me from './me.png';
import cv from './cv.pdf';
import About from './About';
import Skill from './Skill';
function Home() {

	return(
		<>
		<div className='main-cont top-cont'>
				<span>Hello, I'm</span>
				<h2>Nischal Tuladhar</h2>
				<span className='fade-text'>Fullstack Developer</span>
				<div className='main-btns'>
					<a href={cv} className='btnA' download><button>Download CV</button></a>
					<a href='#contact' className='btn-link'><button>Let's Talk</button></a>
				</div>

				<div className='space-cont'>
				</div>
				<div className='img-cont'>
					<span>
						<img src={me} alt="nope" />
					</span>
				</div>
				<span className='b-media'>
					<RiGithubFill style={{'color':'rgba(98,148,185,255)','marginBottom':'1em'}}  /> <br />
				 	<RiLinkedinBoxFill style={{'color':'rgba(98,148,185,255)','marginBottom':'1em'}}  /> <br />
				 	<RiGitlabLine style={{'color':'rgba(98,148,185,255)','marginBottom':'1em'}}  /> <br />
					<span>
						<hr style={{'transform':'rotate(90deg)'}}/>
					</span>
					</span>
				<span className='scroller'><a href='#contact'>Scroll Down</a></span>
		</div>

		<About />
		<Skill />
		<Contact />
		</>
		
		);
}

export default Home;