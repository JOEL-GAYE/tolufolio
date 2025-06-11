import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='social-wrapper'>
        <div className='social-icons'>
            <div style={{ display: 'flex', gap: '10px', fontSize: '24px' }}>
                <hr className="line" />
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com/master_tolu" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <hr className="line" />
    </div>
        </div>
    </div>
    </div>
  )
}

export default Footer