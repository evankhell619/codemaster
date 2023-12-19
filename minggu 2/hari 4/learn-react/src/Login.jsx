import React from 'react';
import Button from './components/Button';
import { Link } from 'react-router-dom';
import InputDefault from './components/formlogin';


function Login()  {
  return (
    <>
    <div className="flex items-center text-center w-full justify-center" >
    <h1 ></h1>
    <div className= "flex col justify-center mt-10 items-center  ">
    <Button className = "bg-secondary rounded-md" >
      <Link to="/Form">Input</Link>
      </Button>
    </div>
    </div>

    <div className="flex items-center text-center w-full justify-center" >
    <h1 >Counttt</h1>
    <div className= "flex col justify-center mt-10 items-center  ">
    <Button className = "bg-secondary rounded-md" >
      <Link to="/Counter">Count</Link>
      </Button>
    </div>
    </div>
    </> );
    
}

export default Login;