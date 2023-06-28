import { AiOutlineMail } from "react-icons/ai";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";
import emailjs from 'emailjs-com';
import { useState } from "react";
export default function Contact() {
    const [msg,setMsg] = useState('');
    const [error,setError] = useState('');
    const [data,setData] = useState({});
    const contactMe = (e) => {
        e.preventDefault();
        if(!data.name || !data.email || !data.msg) {
            setError('Please fill all the fields');
        } else {
            setError('');
             emailjs.sendForm('gmail','template_yd2umv6',e.target,'cioMD6HpOHdTxNtsC')
            .then(r=>{console.log(r);e.target.reset(); setMsg('Thank You For Contacting')})
            .catch(e=>console.log(e));
        }
       
    }
    return (
        <div className="main-cont contact" id='contact'>
            <span>Get In Touch</span>
            <h2 style={{'marginBottom':'1em'}}>Contact Me</h2>
            <div className="sub-cont">
                <div className="smedia-mob">
                    <span className="contacts" onClick={()=>{document.getElementById('mail').click()}}>
                        <a href="mailto:nischaltuladhar15@gmail.com" rel="noreferrer" target='_blank' style={{'display':'none'}} id='mail'></a>
                        <AiOutlineMail size={'1.5em'}/>
                            Email
                        <span>
                            nischaltuladhar15@gmail.com
                        </span>
                        <span>
                        send a message
                        </span>
                    </span>
                    <span className="contacts" onClick={()=>{document.getElementById('fb').click()}}>
                        <a href="https://www.facebook.com/trickster1o1" target='_blank' rel="noreferrer" style={{'display':'none'}} id='fb'></a>
                        <RiFacebookBoxLine size={'1.5em'}/>
                            Facebook
                        <span>
                            trickster1o1
                        </span>
                        <span>
                        send a request
                        </span>
                    </span>
                    <span className="contacts" onClick={()=>{document.getElementById('ig').click()}}>
                        <a href="https://www.instagram.com/_trick5t3r_/" target='_blank' rel="noreferrer" style={{'display':'none'}} id='ig'></a>
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
                    <form onSubmit={contactMe}>
                    <input type="text" name = 'name' placeholder="Your Name" onChange={(e)=>setData({...data, 'name':e.target.value})}  />
                    <input type="email" name = 'email' placeholder="Your Email"  onChange={(e)=>setData({...data, 'email':e.target.value})} />
                    <textarea cols="30" name='msg' rows="5" placeholder="Your Message"  onChange={(e)=>setData({...data, 'msg':e.target.value})}></textarea>
                    {msg ? <small>{msg}</small> : error ? <small>{error}</small> : null}
                    <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}