import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Harshada Bagal</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Feedbacks</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/harshada-b-82b290169/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/harshadaabagal" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/harshada._.17/" target="_blank" rel="noreferrer" ><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; HB 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer