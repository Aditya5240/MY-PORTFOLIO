import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaQuora } from 'react-icons/fa'; // Importing the icons

const HomePage = () => {
  return (
    <>
      <div className="header-text">
        <p className="header-title">Hi, I'm Aditya Jain</p>
        <p id='info'>
          I'm currently a second-year student at IIT-ISM Dhanbad. I am pursuing my undergraduation in Computer Science and Engineering. My hobbies are cycling and playing badminton.
        </p>
       
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/aditya-jain-0483a9280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Aditya5240" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/itsaditya.xo/profilecard/?igsh=MWtpamp3d3htdXFtcA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.quora.com/profile/Aditya-Jain-2749" target="_blank" rel="noopener noreferrer">
            <FaQuora size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
