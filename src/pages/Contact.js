import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className='title'>Contact Me</h2>
      <ul className="contact-info">
        <li>
          <FaEnvelope /> <a href="mailto:joelgaye17@gmail.com">joelgaye17@gmail.com</a>
        </li>
        <li>
          <FaPhone /> +254 701 225 572
        </li>
        <li>
          <FaLinkedin /> <a href="https://linkedin.com/in/joel-ouma-3b1486198/" target="_blank" rel="noopener noreferrer">linkedin.com/in/joel-ouma-3b1486198/</a>
        </li>
        <li>
          <FaGithub /> <a href="https://github.com/JOEL-GAYE" target="_blank" rel="noopener noreferrer">github.com/JOEL-GAYE</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
