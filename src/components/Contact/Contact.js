import React from 'react'
import './Contact.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const SERVICE_ID = "service_7i4fl6q";
const TEMPLATE_ID = "template_8vkchnb";
const PUBLIC_KEY = "PK0qBAgkdGRfZ817S"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact