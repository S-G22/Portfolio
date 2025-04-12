import React from 'react';
import './AboutMe.css';
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import Resume from "../../public/assets/pdf/Resume_2024.pdf";

function AboutMe() {
  const aboutPoints = [
    "🎓 I'm a Graduate of Bachelors of Technology in Information Technology at MAKAUT University.",
    "💼 Full-stack developer creating seamless and engaging web experiences.",
    "🌟 Experienced in both front-end and back-end technologies.",
    "🚀 Proficient in ReactJS and passionate about building interactive web applications across the entire stack.",
    "📚 Continuous learner with a keen interest in staying updated with the latest tech trends.",
    "🌈 Enjoy creating intuitive and visually appealing user experiences.",
    "🎮 Outside coding, I love watching movies, reading books and exploring new places."
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
        <a href="https://drive.google.com/file/d/1y5gkZ9wSk2mSpmez6hQ7cqPiPaqWwIIS/view?usp=sharing" target="_blank" rel="noreferrer">
          <button>
            View Resume <MdOpenInNew />
          </button>
        </a>

        <a href={Resume} download="Aastha-Suman-resume.pdf">
          <button>
            Download <HiOutlineDownload />
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
