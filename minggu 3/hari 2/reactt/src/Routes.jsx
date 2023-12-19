import React from 'react';
import { Route,Routes ,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import  Navigation from './components/Navigation';
import Books from './components/Books';



function ProjectRoutes() {
  
  return (


    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Books" element={<Books/>} />
      <Route path="/About" element={<About />} />

    </Routes>
    </BrowserRouter>
  );
}

export default ProjectRoutes;