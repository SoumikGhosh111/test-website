import React from 'react';
import "./Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// importing framer motions
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className='contact-section-wrapper'>
      <div className='contact-section-header common'>
        <motion.div className='contact-section-header-content'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
          <h1>Let's  Talk</h1>
          <p>Reach out for inquiries, collaborations, or <br /> just to say hello. We're eager to connect!</p>

          <div className='contact-us-links'>

            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><InstagramIcon sx={{ fontSize: "18px" }} /></div>
              <a href='https://www.instagram.com/abhishek.rachuri'>INSTAGRAM</a>
            </div>
            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><LinkedInIcon sx={{ fontSize: "18px" }} /></div>
              <a href='https://www.linkedin.com/company/powermycode/'>LINKEDIN</a>
            </div>
            <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><FacebookIcon sx={{ fontSize: "18px" }} /></div>
              <a href='https://www.facebook.com/profile.php?id=100089064531542&mibextid=ZbWKwL'>FACEBOOK</a>
            </div>
            {/* <div className='contact-us-links-items'>
              <div className='contact-us-links-icons'><XIcon sx={{ fontSize: "18px" }} /></div>
              <a href='#'>TWITTER</a>
            </div> */}
          </div>
        </motion.div>

      </div>

      <div className='contact-section-form-body common'>
        <motion.div className='contact-us-form'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
        >
          <form className='form'>


            <div className='name-email'>


              <div className='form-items form-name-emails'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Name' name='name' />
              </div>
              <div className='form-items'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Email' name='email' />
              </div>


            </div>

            <div className=' form-textarea'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' placeholder='Message' rows={8}></textarea>
            </div>

            <div className='form-items-button'>
              <button className='form-button'>Get in Touch</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact; 