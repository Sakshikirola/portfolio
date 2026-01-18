import React from 'react'
import ProjectCard from './ProjectCard' 

const Projects = () => {
  return ( 
    <div id='projects' className='pt-16 pb-8 px-10 md:pt-20 md:pb-12 md:px-16 text-white bg-[#020B1C] backdrop-blur-md rounded-lg'>
      
      <h1 className='text-2xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text uppercase'> 
        Projects
      </h1>  
      
      <div className='py-12 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center'> 
        <ProjectCard 
          demoLink="https://ems-project-swart.vercel.app/"  
          sourceLink="https://github.com/Sakshikirola/EMS-Project" 
          image="/images/Employee.png"   
          title="Employee Management Dashboard" 
          main="A responsive React dashboard for managing employees and tasks with dynamic status cards and a clean, interactive UI." 
        />
         
        <ProjectCard 
          demoLink="https://sakshikirola.github.io/utkart-ecommerce/"
          sourceLink="https://github.com/Sakshikirola/utkart-ecommerce" 
          image="/images/utkart.png" 
          title="Utkart - Ecommerce Website"   
          main="A frontend ecommerce website built with HTML, CSS, and JavaScript featuring product listings and a responsive shopping UI."
        />

        <ProjectCard 
          demoLink="" 
          sourceLink="https://github.com/Sakshikirola/portfolio"
          image="/images/portfolio.png" 
          title="Personal Portfolio Website"  
          main="A modern personal portfolio built with React and Tailwind CSS to showcase projects and skills."
        />
      </div>
    </div>
  )
}

export default Projects
