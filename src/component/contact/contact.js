import me from "../bg-about.jpg"
//import { useRef } from "react"
import './contact.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = React.createRef();
  const [done, setDone] = useState(false)
  
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    emailjs.sendForm('service_k7frtwb', 'template_r1w3cya', formRef.current, 'user_giPYwiPAtP61Xxr7yNFPu')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss projects</h1>
            <div className="c-info">
              <div className="c-info-item">
              <img className="c-icon" src={me} alt="" width = "30vw" height = "30vh"></img>
              +1 972 799 6521
              </div>
              <div className="c-info-item">
              <img className="c-icon" src={me} width = "30vw" height = "30vh" alt=""></img>
              anirudh.thakur94@gmail.com
              </div>
              <div className="c-info-item">
              <img className="c-icon" src={me} alt="" width = "30vw" height = "30vh"></img>
              3100 northside blvd, Apt 8103, Dallas TX:75080
              </div>
              </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lig.
            </p>
            <form ref = {formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="name" name="user_name"></input><br></br>
              <input type="text" placeholder="subject" name="user_subject"></input><br></br>
              <input type="text" placeholder="email address" name="user_email"></input><br></br>
              <textarea rows="5" placeholder="message" name="message"></textarea> <br></br>
              <button>Submit</button>
              {done && "Thank you for reaching out"}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact