import React, { useEffect, useState } from 'react'

const Loading = ({onComplete}) => {
   const [progress, setProgress] = useState(0); 

   useEffect(()=>{
     const interval = setInterval(()=>{ 
        setProgress((prev)=>{
            if(prev >= 100){
                clearInterval(interval); 
                onComplete(); 
                return 100; 
            }
            return prev+1;
        });
     },12);
     return () => clearInterval(interval); 
   },[onComplete]); 

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-black z-50'>
        <p className="text-white text-sm mb-2 tracking-wider">Loading Portfolio...</p> 

      <div className='w-52 h-2 bg-gray-900 rounded-full overflow-hidden shadow-inner'>
        <div className='h-full rounded-full transition-all duration-200' 
        style={{
            width:`${progress}%`, 
            background:"linear-gradient(90deg, #1e3a8a, #3b82f6)",
            boxShadow:"0 0 15px #1e3a8a, 0 0 25px #3b82f6", 
        }}></div> 
      </div>
      <p className='mt-2 text-white text-sm font-medium tracking-wider'>{progress}%</p>  
    </div>
  )
}

export default Loading
