import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Projects, StarsCanvas, Tech} from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-black">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
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
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
  )
}

export default App
