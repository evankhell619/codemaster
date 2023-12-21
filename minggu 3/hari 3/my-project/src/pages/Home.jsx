import React, { useState } from 'react';
import Input from '../components/Input';


const Home = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      
      <div className="bg-green-700 text-white p-8" >
        <div className=''>
          <h2 className='text-center lg:2xl:'>What Title Books you want? {term}</h2>

          <p className='text-center  text-md mb-4 px-2 lg:px-0'>
          
          </p>
          <Input/>
        </div>
      </div>
    </div>
  );
};

export default Home;