import React from 'react'
import avatar from '../assets/avatar.jpg'

const Home = () => {
  return (
    <div>
        <h1>Hi,</h1> <h2>I am <h1 className='name'>Joel Ouma Oundo,</h1> a Front-end Developer
        </h2>
        <p className='wazi'>I develop and design experiences that makes people's lives<br/> simpler through web Apps. <br/>
        I work with
            React.js, HTML, CSS and javascript.
        </p>
        <img 
        src={avatar}
        alt='profile-pic'
        className='profile-avatar'>
        </img>
    </div>
  )
}

export default Home