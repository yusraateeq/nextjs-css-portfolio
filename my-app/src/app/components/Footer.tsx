import React from 'react';
import Image from 'next/image';
import './Footer.css';

import profile_1 from '../../assets/facebook-circle-logo-24.png';
import profile_2 from '../../assets/instagram-alt-logo-24 (1).png';
import profile_3 from '../../assets/linkedin-square-logo-24 (1).png';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="social-icons-1">
          <a href="https://www.facebook.com/profile.php?id=61552980219340&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <Image src={profile_1} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/ateeq.yusra?igsh=OWR6Y3lwZjlyZ3Nh" target="_blank" rel="noopener noreferrer">
            <Image src={profile_2} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/yusra-ateeq-00797a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Image src={profile_3} alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
        <ul className="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">
          &copy; Yusra Ateeq | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
