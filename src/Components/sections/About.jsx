import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons"; 

const About = () => { 
  return (
    <section id="about" className="pt-6 pb-10 px-10 md:pt-16 md:pb-16 md:px-16 text-white bg-[#020B1C] backdrop-blur-md rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text mb-10">
        ABOUT ME
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
        <div className="grid grid-cols-3 gap-6 place-items-center">

          <Skill icon={faHtml5} name="HTML5" />
          <Skill icon={faCss3Alt} name="CSS3" />
          <Skill icon={faJs} name="JavaScript" />
          <Skill icon={faReact} name="React" />
          <Skill icon={faCode} name="C / C++" />
          <Skill icon={faGithub} name="Github" /> 
        </div>

        <div className="space-y-2 text-gray-300 leading-relaxed text-base md:text-lg">
          <p className="text-md">
            I am a passionate Front-End Developer. As a fresher, I focus on building
            clean, responsive, and user-friendly web interfaces.
          </p>
          <p className="text-md">  
            Through personal projects, I have gained hands-on experience in
            creating dashboards, ecommerce interfaces, and portfolio websites.
            I am eager to learn new technologies and grow as a developer.
          </p>

         <div>
          <h3 className="text-white font-semibold mb-2">Skills</h3>
          <p className="text-sm">
           <span className="text-cyan-400">Frontend:</span> HTML, CSS, JavaScript, React, Tailwind CSS <br />
           <span className="text-cyan-400">Programming:</span> C, C++ <br />
           <span className="text-cyan-400">CS Fundamentals:</span> DSA (Basic) <br />
           <span className="text-cyan-400">Tools:</span> GitHub, VS Code
          </p>
         </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#07152e] hover:scale-105 transition-transform duration-300">
      <FontAwesomeIcon icon={icon} className="text-4xl text-cyan-400" />
      <span className="text-sm">{name}</span> 
    </div>
  );
};

export default About;
