import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  

  return (
    <div>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navbar />}>

                  <Route path="home" element={<Home />} />
                  <Route path="contact" element={<Contact/>} />
                  
              </Route>
          </Routes>


      </BrowserRouter>
      
    </div>
  )
}

export default App
