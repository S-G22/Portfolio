import React from 'react'
import './Skills.css'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiFigma,
  SiPostman,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVisualstudiocode,
  SiMui,
  SiVercel,
  SiAngularjs,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiVisualstudio
} from "react-icons/si";
import Github from './Github';

function Skills() {
  return (
    <div id='skills' className='skills'>
      <h1>Skills and Technologies</h1>
      <div className="skill--card">
        <div className='skill--item'>
          <SiHtml5 size="5rem" />
          <p>HTML</p>
        </div>
        <div className='skill--item'>
          <SiCss3 size="5rem" />
          <p>CSS</p>
        </div>
        <div className='skill--item'>
          <SiBootstrap size="5rem" />
          <p>BOOTSTRAP</p>
        </div>
        <div className='skill--item'>
          <SiJavascript size="5rem" />
          <p>JAVASCRIPT</p>
        </div>
        <div className='skill--item'>
          <SiAngularjs size="5rem" />
          <p>ANGULARJS</p>
        </div>
        <div className='skill--item'>
          <SiReact size="5rem" />
          <p>REACT</p>
        </div>
        <div className='skill--item'>
          <SiCsharp size="5rem" />
          <p>C#</p>
        </div>
        <div className='skill--item'>
          <SiDotnet size="5rem" />
          <p>.NET</p>
        </div>
        <div className='skill--item'>
          <SiMicrosoftsqlserver size="5rem" />
          <p>MS-SQL</p>
        </div>
        <div className='skill--item'>
          <SiGit size="5rem" />
          <p>GIT</p>
        </div>
        <div className='skill--item'>
          <SiGithub size="5rem" />
          <p>GITHUB</p>
        </div>
        <div className='skill--item'>
          <SiMui size="5rem" />
          <p>MATERIAL UI</p>
        </div>
        <div className='skill--item'>
          <SiNetlify size="5rem" />
          <p>NETLIFY</p>
        </div>
        <div className='skill--item'>
          <SiVercel size="5rem" />
          <p>VERCEL</p>
        </div>
        <div className='skill--item'>
          <SiFigma size="5rem" />
          <p>FIGMA</p>
        </div>
        <div className='skill--item'>
          <SiPostman size="5rem" />
          <p>POSTMAN</p>
        </div>
        <div className='skill--item'>
          <SiVisualstudiocode size="5rem" />
          <p>VS CODE</p>
        </div>
        <div className='skill--item'>
          <SiVisualstudio size="5rem" />
          <p>VISUAL STUDIO</p>
        </div>
       
      </div>
     
      {/* <div className="skills--section">
        <h3>Front-end: </h3>
        <button>HTML</button>
        <button>CSS</button>
        <button>JAVASCRIPT</button>
        <button>REACTJS</button>
      </div>
      <div className="skills--section">
        <h3>Frameworks: </h3>
        <button>REACT ROUTER</button>
        <button>CONTEXT API</button>
        <button>TAILWIND CSS</button>
      </div>
      <div className="skills--section">
        <h3>Data Science: </h3>
        <button>PYTHON</button>
        <button>SUPERVISED LEARNING</button>
        <button>TENSORFLOW</button>
      </div>
      <div className="skills--section">
        <h3>Other: </h3>
        <button>C++</button>
      </div> */}
      {/* <div className='skills--learningPath'>
        <h3>Learning Path:</h3>
        <ul>
          <li>Exploring NextJS, a powerful React framework that simplifies server-side rendering and makes building dynamic web applications a breeze.</li>
          <li>Deepening my understanding of CSS methodologies and responsive design.</li>
          <li>Diving into back-end technologies like NodeJS to round out my full-stack knowledge.</li>
        </ul>
      </div> */}
    </div>
  )
}

export default Skills