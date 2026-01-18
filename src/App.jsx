import React, { useState } from 'react'
import Loading from './Components/Loading';
import Home from './Components/sections/Home'
import About from './Components/sections/About'
import Projects from './Components/sections/Projects'
import Contact from './Components/sections/Contact'
import Foot from './Components/sections/Foot'

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="pt-[9vh]">
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : ( 
        <>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Foot/> 
        </>
      )}
    </main>
  );
}

export default App;
