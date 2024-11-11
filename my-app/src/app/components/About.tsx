import React from 'react';
import './About.css';
import Image from 'next/image';
import profile from '../../assets/girl 1.png';
import image_1 from '../../assets/html.jpeg';
import image_2 from '../../assets/css.png';
import image_3 from '../../assets/js.png';
import image_4 from '../../assets/wordpress.jpeg';
import image_5 from '../../assets/bootstrap.png';
import image_6 from '../../assets/mysql.png';
import image_7 from '../../assets/php.png';
import image_8 from '../../assets/nextjs.png';

const About = () => {
    return (
        <div id='about'>
            <section className="about" id="about">
                <div className="about-1" data-aos="fade-left" data-aos-duration="1500">
                    <div className="about-img">
                        <Image src={profile} alt="Profile Image" />
                    </div>
                    <div className="about-content">
                        <h2>About <span>Me</span></h2>
                        <p>Hello, my name is Yusra Ateeq. I am 18 years old. I am a professional Web Developer with more than 1 year of experience. I love to try something new for my projects.</p>
                    </div>
                </div>

                <hr />

                <div data-aos="fade-right" data-aos-duration="1500">
                    <div className="experience">
                        <h2><span>Work</span> Experience</h2>
                        <p>In my +1-year career, I took part in 2 companies and helped them grow. Being a professional Web Developer is my dream, so I enjoy finishing designs and trying something new for my projects.</p>
                    </div>
                    <div className="box">
                        <div>
                            <li className="num">30<span>+</span></li>
                            <li className="text">Projects</li>
                        </div>
                        <div>
                            <li className="num">1<span>+</span></li>
                            <li className="text">Years Experience</li>
                        </div>
                        <div>
                            <li className="num">10<span>+</span></li>
                            <li className="text">Satisfied Clients</li>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="skills" data-aos="fade-left" data-aos-duration="1500">
                    <h2>My <span>Skills</span></h2>
                    <div className="skills-img">
                        <div>

                            <Image className="img-1" src={image_1} alt="HTML"  />
                            <Image src={image_2} alt="CSS"  />
                        </div>
                        <div>

                            <Image src={image_3} alt="JavaScript" />
                            <Image src={image_8} alt="NextJs" />


                        </div>
                        <div>
                            <Image src={image_4} alt="WordPress" />
                            <Image src={image_5} alt="Bootstrap" />
                        </div>
                        <div>

                            <Image src={image_6} alt="MySQL" />
                            <Image src={image_7} alt="PHP" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
