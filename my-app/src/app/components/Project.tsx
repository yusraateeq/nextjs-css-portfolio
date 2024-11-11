import React from 'react'
import './Project.css';
import Image from 'next/image';
import project_1 from '../../assets/html-project0.jpg';
import project_2 from '../../assets/html-project8.jpg';
import project_3 from '../../assets/js-project1.jpg';

const Project = () => {
  return (
    <div id='project'>
      <section className="projects" id="projects">
        <div className="project-1" data-aos="fade-right" data-aos-duration="1500">
            <h2> <span>PRO</span>JECT<span>-1</span></h2>
            <div className="video-1">
                {/* <video autoplay="" muted="" loop="" src="buildcon.mp4" he></video> */}
                <Image src={project_1} alt="Profile Image" width={500}/>

                <div>
                    <h3>Go Adventure</h3>
                    <p>Welcome to Adventure Travel, your gateway to unforgettable journeys and thrilling experiences.</p>
                </div>
            </div>
        </div>
        <div className="project-2" data-aos="fade-left" data-aos-duration="1500">

            <h2>PRO<span>JECT</span>-2</h2>
            <div className="video-2">
                <div>
                    <h3>Educity</h3>
                    <p>Better World Education provides quality education to empower individuals and build a brighter, better future globally.</p>
                </div>
                
                {/* <video autoplay="" muted="" loop="" src="login.mp4"></video> */}
                <Image src={project_2} alt="Profile Image" width={500}/>

                
            </div>
        </div>
        <div className="project-3" data-aos="fade-right" data-aos-duration="1500">

            <h2> <span>PRO</span>JECT<span>-3</span></h2>
            <div className="video-3">
                {/* <video autoplay="" muted="" loop="" src="mobile.mp4" he></video> */}
                <Image src={project_3} alt="Profile Image" width={500}/>

                <div>
                    <h3>Kelsey</h3>
                    <p>Research-based copywriting and brand messaging, crafted with care for you and your people.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Project
