
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-pink-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">BookOfHero</div>

        <div className=" md:flex space-x-4">
          <Link className="text-white hover:text-slate-200 hover:bg-green-700 rounded" to="/Home">Home</Link>
          <Link className="text-white hover:text-slate-200 hover:bg-green-700 rounded" to="/About">About</Link>
          <Link className="text-white hover:text-slate-200 hover:bg-green-700 rounded" to="/Login">Login</Link>
          <Link className="text-white hover:text-slate-200 hover:bg-green-700 rounded" to="/Books">Books</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
