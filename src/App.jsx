import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,Real,StarsCanvas} from "./components"

function App() {
 

  return (
    <BrowserRouter>
        <div className="bg-primary relative z-0">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
            </div>
            <About/>
            <Experience/>
            {/* <Tech/> */}
            <Works/>
            <Real/>
            {/* <Feedbacks/> */}
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App
