import React from 'react';


const projectData = [
  {
    title: 'Mkulima Solutions',
    description: 'A simple ecomerce website built with React.',
    liveLink: 'https://joel-gaye.github.io/phase-2-project/',
    codeLink: 'https://github.com/yourusername/todo-app',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using OpenWeather API.',
    liveLink: 'https://your-live-weather-app.com',
    codeLink: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    liveLink: 'https://yourname.github.io/portfolio',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
