import { BrowserRouter } from "react-router-dom"
import { useState } from "react";
import { About, Contact, Experience, Footer, Hero, Navbar, Projects, StarsCanvas, Tech} from './components';

const App = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <Navbar toggle={toggle} setToggle={setToggle}/>
          <div onClick={() => setToggle(false)}>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center viewing">
              <Hero/>
            </div>
            <About/>
            <Projects/>
            <Tech/>
            <Experience/>
            <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
