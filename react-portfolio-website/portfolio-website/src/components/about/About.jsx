import React from 'react'
import'./about.css';
import ME from '../../assets/me-about.jpg';
import{FaAward} from 'react-icons/fa';
import{BiBriefcaseAlt2} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>9+ Years Working</small>
            </article>
            <article className='about__card'>
              <BiBriefcaseAlt2 className='about__icon'/>
              <h5>Companies</h5>
              <small>CGI, Mindtree, Mavenir</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a software engineer specialized in backend applications. I started web development in 2013 and acquired a strong knowledge and expertise in this field over time.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About