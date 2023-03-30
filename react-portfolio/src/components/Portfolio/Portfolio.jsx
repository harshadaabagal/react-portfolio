import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/todoList.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'GoFit',
      img: IMG1,
      description:
        'GoFit app allows users to track their health journey and contact doctors and trainers easily',
      technologies: 'Java (Java Swing)',
      link: '',
      github: 'https://github.com/harshadaabagal/GoFit',
    },
    {
      id: 2,
      title: '2D Car Game',
      img: IMG4,
      description:
        '2D car game designed using pygame library in Python',
      technologies: 'Python | Pygame',
      link: '',
      github: 'https://github.com/harshadaabagal/2D_CarGame',
    },
    {
      id: 3,
      title: 'Blood Donation Management System',
      img: IMG2,
      description: 'Designed and implemented Blood Donation Management System',
      technologies: 'SQL',
      link: '',
      github: 'https://github.com/harshadaabagal/BloodDonationManagementSystem',
    },
    {
      id: 4,
      title: 'To-Do List in React',
      img: IMG3,
      description:
        'A basic To-Do list build in React',
      technologies: 'React | CSS | Javascipt',
      link: '',
      github: 'https://github.com/harshadaabagal/ToDoList',
    },
    {
      id: 5,
      title: 'Netflix Clone',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: '',
      github: 'https://github.com/harshadaabagal/NetflixClone',
    },
    {
      id: 6,
      title: 'Amazon Clone',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: '',
      github: 'https://github.com/harshadaabagal/AmazonClone',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
