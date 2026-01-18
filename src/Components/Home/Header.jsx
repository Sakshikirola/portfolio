import React, { useState } from "react"; 
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
                             
const Header = () => {  
  const [active,setActive] = useState("home")
  const [open, setOpen] = useState(false) 

  const linkStyle = (name) =>{ 
    if(active === name){
      return "relative text-blue-400 after:absolute after:bg-blue-400 drop-shadow-[0_0_6px_#38bdf8]";
    }else{
      return "hover:text-blue-400 transition hover:drop-shadow-[0_0_6px_#38bdf8]";
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full h-[9vh] z-50 bg-[#020b1c] backdrop-blur-md"> 
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-end px-4 sm:px-6 lg:px-10">  

        <div className="hidden lg:flex gap-10 text-sm tracking-widest uppercase text-blue-200 cursor-pointer">
          <a href="#home" onClick={() => setActive("home")} className={linkStyle("home")}> Home</a>
          <a href="#about" onClick={() => setActive("about")} className={linkStyle("about")}>About me</a>
          <a href="#projects" onClick={() => setActive("projects")} className={linkStyle("projects")}>Projects</a> 
          <a href="#contact" onClick={() => setActive("contact")} className={linkStyle("contact")}>Contact</a> 
        </div> 

        <button className="lg:hidden text-blue-200 text-xl" onClick={()=>setOpen(!open)}>
          <FontAwesomeIcon icon={open? faXmark : faBars}/> 
        </button>
      </nav>
 
      <div className={`lg:hidden bg-[#020b1c] overflow-hidden transition-all duration-300 ${open ? "max-h-60 py-6" : "max-h-0"}`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-end"> 
        <div className="flex flex-col gap-6 text-sm tracking-widest uppercase text-blue-200">
        <a href="#home" onClick={() => { setActive("home"); setOpen(false); }} className={linkStyle("home")}>Home</a>
        <a href="#about" onClick={() => { setActive("about"); setOpen(false); }} className={linkStyle("about")}>About me</a>
        <a href="#projects" onClick={() => { setActive("projects"); setOpen(false); }} className={linkStyle("projects")}>Projects</a>
        <a href="#contact" onClick={() => { setActive("contact"); setOpen(false); }} className={linkStyle("contact")}>Contact</a>
        </div>
       </div> 
      </div> 
    </header>
  );
}; 

export default Header;