import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact, faHtml5,faCss3Alt,faJs,} from "@fortawesome/free-brands-svg-icons";

const Hero = () => { 
  return (  
    <div 
      className="w-full h-[70vh] md:h-[82vh] bg-cover bg-center bg-linear-to-r from-[#020B1C] via-blue-800 to-blue-400">
      <div className='relative z-10 flex flex-col justify-center h-full px-10 md:px-30 text-left'> 
       <h3 className='text-blue-400 text-3xl sm:text-4xl md:text-5xl font-bold uppercase'>Front-end</h3> 
       <div className="w-16 h-1 bg-blue-400 mt-2"></div> 
       <h3 className='text-white px-30 text-3xl sm:text-4xl md:text-5xl font-bold uppercase'>Developer</h3>    
       <p className="mt-6 max-w-md text-gray-300 text-xl">  
        Hi, I’m Sakshi Kirola — Creating modern web experiences where clean design meets thoughtful front-end development. 
      </p> 
 
      <div className="hidden md:flex flex-col gap-6 absolute right-14 top-1/2 -translate-y-1/2 text-white/50">
        <FontAwesomeIcon icon={faReact} size="2x" className="hover:text-cyan-400 transition" />
        <FontAwesomeIcon icon={faHtml5} size="2x" className="hover:text-orange-500 transition" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" className="hover:text-blue-600 transition" />
        <FontAwesomeIcon icon={faJs} size="2x" className="hover:text-yellow-400 transition" />
      </div> 
      
      </div> 
    </div>
  );
};

export default Hero;
