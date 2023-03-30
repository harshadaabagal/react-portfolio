import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me2.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.9+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I am a software developer with 1.9+ years of experience, working on various core technology like (Backend development, Database administration and many more). And in recent years, I have developed my interest in Web Developement to understand the front end technologies used in the web application and follow the best coding practices to enhance the user experience. I am a Software developer who cares about the code and the people.
          Outside of work I like to spend my time walking our Rottweiler, binge on Netflix, and try new cuisines at local restaurants (foodie at heart). </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro