import React, {useState} from 'react';
import "./Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../functions/urls';

import axios from 'axios';
import emailjs from '@emailjs/browser'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// importing framer motions
import { motion } from 'framer-motion';

function Contact() {
  
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    message: "",
  }); 


  const handleChange = (e) => { 
    const {name, value} = e.target
    setFormData({ 
      ...formData, 
      [name]: value
    })
  }; 


  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(formData);

    const templateParams = { 
      from_name: formData.name, 
      from_email: formData.email, 
      to_name: "PowerMyCode", 
      message: formData.message, 
    } 
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => { 
      console.log("email sent successfully !!!", response); 
      setFormData({ 
        name: "", 
        email: "", 
        message: ""
      })

      toast.success("Message Sent Successfully !"); 
    })
    .catch((e) => { 
      console.log(e); 
      toast.error("Error Sending Message !"); 
    })

   
  }

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
          <form className='form' onSubmit={handleSubmit}>


            <div className='name-email'>


              <div className='form-items form-name-emails'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Name' name='name' type='text' value={formData.name} required onChange={handleChange}/>
              </div>
              <div className='form-items'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Email' name='email' type='email' value={formData.email} required  onChange={handleChange}/>
              </div>


            </div>

            <div className=' form-textarea'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' placeholder='Message' rows={8} value={formData.message} required onChange={handleChange}></textarea>
            </div>

            <div className='form-items-button'>
              <button className='form-button' type='submit'>Get in Touch</button>
            </div>
          </form>
        </motion.div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Contact; 