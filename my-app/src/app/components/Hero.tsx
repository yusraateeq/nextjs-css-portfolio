import React from 'react';
import './Hero.css';
import Image from 'next/image';
import profile from '../../assets/girl 1.png';
import profile_1 from '../../assets/facebook-circle-logo-24.png';
import profile_2 from '../../assets/instagram-alt-logo-24 (1).png';
import profile_3 from '../../assets/linkedin-square-logo-24 (1).png';

const Hero = () => {
    return (
        <div id='hero'>
            <section className="home" id="home">
                <div className="home-content" data-aos="fade-right" data-aos-duration="1500">
                    <h2>Hi, It's <span>Yusra</span></h2>
                    <h3>and I'm a passionate</h3>
                    <div className="green"> <span id="element"></span></div>

                    <div className="social-icons">
                        <a 
                            href="https://www.facebook.com/profile.php?id=61552980219340&mibextid=ZbWKwL" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image src={profile_1} alt="Facebook Profile" />
                        </a>
                        <a 
                            href="https://www.instagram.com/ateeq.yusra?igsh=OWR6Y3lwZjlyZ3Nh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image src={profile_2} alt="Instagram Profile" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/yusra-ateeq-00797a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Image src={profile_3} alt="LinkedIn Profile" />
                        </a>
                    </div>

                    <div className="btn-group">
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>

                <div className="home-img" data-aos="fade-left" data-aos-duration="1500">
                    <Image src={profile} alt="Yusra's Profile" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
