import React from 'react';
import './AboutMe.css';
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import Resume from "../../public/assets/pdf/Resume_2024.pdf";

function AboutMe() {
  const aboutPoints = [
    "💼 Currently working as a Software Developer at Wipenex IT Pvt. Ltd., contributing to full-stack development projects and robust enterprise solutions.",
    "🖥️ Proficient in crafting responsive and interactive user interfaces using HTML5, CSS3, Bootstrap, JavaScript, Material UI, and React.",
    "🔁 Hands-on experience with full-stack development using AngularJS, React, C#, .NET, and MS SQL for scalable and efficient solutions.",
    "🔧 Adept at building and integrating RESTful APIs and reusable components to streamline development and improve modularity.",
    "🚀 Skilled in using Git, GitHub, Postman, Visual Studio, and VS Code for version control, debugging, and testing.",
    "🎯 Passionate about transforming complex requirements into user-centric digital experiences, with a keen eye for design and performance optimization.",
    "🎮 Outside coding, I love cooking, watching movies and exploring new places."
  ];

  return (
    <div id='about' className='about'>
      <h1>About Me</h1>
      <ul className="about--info">
        {aboutPoints.map((point, index) => (
          <li key={index} style={{ "--i": index + 1 }}>{point}</li>
        ))}
      </ul>

      <div className="about--button">
        <a href="https://drive.google.com/file/d/1KxwTQT5ljyQ15ZOaM27ZZv43DYzCXy-a/view?usp=drive_link" target="_blank" rel="noreferrer">
          <button>
            View Resume 
          </button>
        </a>

        <a href={Resume} download="Shivani-Resume.pdf">
          <button>
            Download 
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
