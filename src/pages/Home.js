import React from 'react'
import avatar from '../assets/avatar.jpg'

const Home = () => {
  return (
    <div>
        <section className='card'>
          <h1>Hi,</h1> 
          <h2>I'm <span className='joe'>Joel </span>.</h2><br/><span className='dev'>A Front-End Developer</span>
        </section>
        <p className='wazi'>I develop and design experiences that makes people's lives<br/> simpler through web Apps. <br/>
        </p>
        <div className='photo-container'>
          <img 
        src={avatar}
        alt='profile-pic'
        className='profile-avatar'>
        </img>
        </div>
        < button className='btn-contact'>CONTACT ME</button>
    </div>
  )
}

export default Home