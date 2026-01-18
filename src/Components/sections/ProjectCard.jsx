import React from 'react'

const ProjectCard = ({ title, main, image, demoLink, sourceLink}) => {  
  return (
    <div className='flex flex-col w-full max-w-sm md:max-w-md  bg-white/5 backdrop-blur-md shadow-lg shadow-white/10 rounded-2xl hover:scale-105 transition-transform duration-300'> 
      
      <img 
        className='rounded-t-2xl w-full h-auto object-cover' 
        src={image} 
        alt={title} 
      />  

      <div className='p-6 flex flex-col grow'> 
        <h3 className='text-xl md:text-2xl font-bold mb-2'> 
          {title}
        </h3> 

        <p className='text-sm leading-relaxed text-gray-300 grow'>  
          {main}
        </p> 

        <div className='mt-4 flex gap-3'>
          <a
          target='_blank'
          href={demoLink}
          className='text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-linear-to-r from-cyan-500 to-blue-500 hover:opacity-90 hover:scale-105 transition-transform duration-300 cursor-pointer'> 
            Demo
          </a> 

          <a
          href={sourceLink} 
          target='_blank' 
          className='py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl border border-cyan-400 text-cyan-400 bg-transparent hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer'>
            Source code 
          </a>  
        </div> 
      </div> 
    </div>
  )
}

export default ProjectCard
