import React from 'react';
import "./Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className='contact-section-wrapper'>
      <div className='contact-section-header common'>
        <div className='contact-section-header-content'
        >
          <h1>Let's  Talk</h1>
          <p>Reach out for inquiries, collaborations, or <br /> just to say hello. We're eager to connect!</p>

          <div className='contact-us-links'>

            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><InstagramIcon sx={{ fontSize: "18px" }} /></div>
              <a href='#'>INSTAGRAM</a>
            </div>
            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><LinkedInIcon sx={{ fontSize: "18px" }} /></div>
              <a href='#'>LINKEDIN</a>
            </div>
            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><FacebookIcon sx={{ fontSize: "18px" }} /></div>
              <a href='#'>FACEBOOK</a>
            </div>
            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><XIcon sx={{ fontSize: "18px" }} /></div>
              <a href='#'>TWITTER</a>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-section-form-body common'>
        <div className='contact-us-form'>
          <form className='form'>


            <div className='name-email'>


              <div className='form-items'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Name' name='name' />
              </div>
              <div className='form-items'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Email' name='email' />
              </div>


            </div>

            <div className='form-items'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' placeholder='Message' rows={10}></textarea>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact; 