import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div id="contact" className="pt-10 md:pt-8 pb-12 md:pb-16 px-10 md:px-24 text-white bg-[#020B1C]">
      <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text uppercase">
        Contact Me 
      </h1>

      <p className="pt-4 text-gray-300">
        I’m open to frontend internships and learning opportunities.
        Feel free to reach out! 
      </p>

      <div className="pt-10 flex flex-col gap-6"> 
        <a
          href="mailto:kirolasakshi@gmail.com"
          className="flex items-center gap-4 p-4 rounded-xl bg-[#07152e] hover:scale-105 hover:text-cyan-400 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span>kirolasakshi@gmail.com</span> 
        </a>

        <a
          href="https://github.com/Sakshikirola"
          target="_blank"
          className="flex items-center gap-4 p-4 rounded-xl bg-[#07152e] hover:scale-105 hover:text-cyan-400 transition"
        > 
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <span>github.com/Sakshikirola</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sakshi-kirola-24797232b/"
          target="_blank" 
          className="flex items-center gap-4 p-4 rounded-xl bg-[#07152e] hover:scale-105 hover:text-cyan-400 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <span>linkedin.com/in/sakshi-kirola</span> 
        </a>
      </div> 
    </div>
  )
}

export default Contact
