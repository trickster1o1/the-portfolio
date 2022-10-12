import { AiOutlineMail } from "react-icons/ai";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

export default function Contact() {
    return (
        <div className="main-cont contact" id='contact'>
            <span>Get In Touch</span>
            <h2 style={{'marginBottom':'1em'}}>Contact Me</h2>
            <div className="sub-cont">
                <div>
                    <span className="contacts">
                        <AiOutlineMail size={'1.5em'}/>
                            Email
                        <span>
                            nischaltuladhar15@gmail.com
                        </span>
                        <span>
                        send a message
                        </span>
                    </span>
                    <span className="contacts">
                        <RiFacebookBoxLine size={'1.5em'}/>
                            Facebook
                        <span>
                            trickster1o1
                        </span>
                        <span>
                        send a request
                        </span>
                    </span>
                    <span className="contacts">
                    <RiInstagramLine size={'1.5em'}/>
                            Instagram
                        <span>
                            _trick5t3r_
                        </span>
                        <span>
                        give me a follow
                        </span>
                    </span>
                </div>
                <div>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />
                    <textarea cols="30" rows="5" placeholder="Your Message"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    );
}