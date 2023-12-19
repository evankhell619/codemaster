import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import InputDefault from './components/formlogin';
import Counter from './Counter';
import ToDoList from './ToDoList';


function ProjectRoutes() {
  return (
    <main>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Form" element={<InputDefault/>} />
      <Route path="/Counter" element={<Counter/>} />
      <Route path="/ToDoList" element={<ToDoList/>} />
    </Routes>
    </main>
  );
}

export default ProjectRoutes;