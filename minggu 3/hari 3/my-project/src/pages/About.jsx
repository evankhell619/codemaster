import React from 'react';
import Profile from "../assets/1.png"

const About = () => {
  return (
    <div className="bg-green-700 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <img
            src={Profile}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-4xl font-bold text-white hover:text-pink-700">Book Of Hero </h1>
            <p className="text-gray-400 text-2xl hover:text-white">Help you to explore the world</p>
          </div>
        </div>

        <p className="text-lg mb-6">
          
"Renting a book offers a flexible and cost-effective way for individuals to access a wide range of literature without the commitment of ownership. Whether you're an avid reader, a student on a budget, or someone with a temporary interest in a particular genre, renting books provides a convenient solution.
<br /> <br />
By choosing to rent a book, you gain temporary access to the knowledge and entertainment within its pages without the long-term investment. This approach is particularly advantageous for students who may need textbooks for a specific semester or professionals seeking reference materials for a short-term project.


        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Book Genre</h2>
            <ul>
              <li>Romance</li>
              <li>Horror</li>
              <li>Adult</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: heroisgod@book.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
