import React from 'react';

const Input = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='max-w-auto mx-auto my-4 p-4 flex content-center items-center '>
        <input
          type='text'
          placeholder='Whats Book Do You Mean?'
          autoComplete='off'
          className='input'
        />
        <div>
        <button type='submit' className='btn bg-green-500 max-w-auto mx-auto my-4 p-4 rounded-full block content-center'>
          Search
        </button>
        </div>
      </form>
    </div>
  );
};

export default Input;