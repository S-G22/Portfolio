import React from 'react'
import './Footer.css'
import { SiHackerrank, SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";


function Footer() {
  return (
    <div className='footer'>
      <div className='footer--links'>
       
        <a href="https://www.linkedin.com/in/shivani-gupta-967b61201/" target="_blank"><SiLinkedin size={40} /></a>
        <a href="https://github.com/S-G22" target="_blank"><SiGithub size={40} /></a>
        <a href="https://www.hackerrank.com/profile/shivani22gupta22" target="_blank"><SiHackerrank size={40} /></a>
      </div>
      <p>Coded with ❤️ by  Shivani Gupta</p>
    </div>
  )
}

export default Footer