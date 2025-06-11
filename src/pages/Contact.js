import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <ul className="contact-info">
        <li>
          <FaEnvelope /> <a href="mailto:joelgaye17@gmail.com">joelgaye17@gmail.com</a>
        </li>
        <li>
          <FaPhone /> +254 701 225 572
        </li>
        <li>
          <FaLinkedin /> <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a>
        </li>
        <li>
          <FaGithub /> <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">github.com/yourname</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
