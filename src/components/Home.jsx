import React, { useEffect } from 'react'
import './Home.css'
import TypeWriter from './TypeWriter';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div id='home' className='home'>
     <h1>Hi 👋,</h1>
     <h1>I'm <span>Shivani Gupta</span> 🚀</h1>
      <h2><TypeWriter /></h2>
      <p><i>A passionate Software Developer building efficient and engaging full-stack web applications.
      I specialize in creating clean, scalable, and responsive digital solutions that solve real-world problems.</i></p>
      <Link to="about" smooth={true} offset={-120} >
        <button className='home--button'>Dive In</button>
      </Link>
      <div className="line-animation"></div>
    </div>
    
  )
}

export default Home