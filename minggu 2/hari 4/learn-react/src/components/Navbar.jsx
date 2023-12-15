// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">HELLOPANDA</div>

        <div className="hidden md:flex space-x-4">
          <Link className="text-white hover:text-gray-300" to="/Home">Home</Link>
          <Link className="text-white hover:text-gray-300" to="/About">About</Link>
          <Link className="text-white hover:text-gray-300" to="/Login">Login</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
