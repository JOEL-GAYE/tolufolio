import React from 'react';

const SkillsData = [
  {
    title: 'HTML',
    description: 'Markup language for structuring web content.',
    competence: 'Semantic HTML, Forms, SEO best practices',
    proficiency: 'Advanced',
  },
  {
    title: 'CSS',
    description: 'Styling language used for designing web layouts.',
    competence: 'Flexbox, Grid, Media Queries, Animations',
    proficiency: 'Advanced',
  },
  {
    title: 'JavaScript',
    description: 'Programming language for dynamic web behavior.',
    competence: 'DOM Manipulation, ES6+, Fetch API, Events',
    proficiency: 'Intermediate',
  },
  {
    title: 'React.js',
    description: 'JavaScript library for building user interfaces.',
    competence: 'Hooks, Props, State Management, Routing',
    proficiency: 'Intermediate',
  },
  {
    title: 'Bootstrap',
    description: 'CSS framework for responsive design.',
    competence: 'Grid System, Components, Utilities',
    proficiency: 'Advanced',
  },
  {
    title: 'Git & GitHub',
    description: 'Version control system and code hosting platform.',
    competence: 'Branching, Pull Requests, Collaboration',
    proficiency: 'Intermediate',
  }
];

const Skills = () => {
  return (
    <section className='projects-section'>
      <h2 className='title'>My Skills</h2>
      <div className='projects-container'>
        {SkillsData.map((skill, index) => (
          <div className='project-card' key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <p><strong>Competence:</strong> {skill.competence}</p>
            <p><strong>Proficiency:</strong> {skill.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
