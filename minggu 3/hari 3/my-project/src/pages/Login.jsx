import React, { useState } from 'react';
import { users } from '../data/datauser';
import { admins } from '../data/datauser';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin('DashboardUser');
    } else if (username === 'admin' && password === 'adminpassword') {
      onLogin({admins});
    } else {
      alert('You not admin');
    }
  };

return (
  <div className="bg-green-700 text-white p-8 flex items-center justify-center h-screen">
    <div className="bg-gray-100 p-8 rounded">
      <h2 className="text-4xl mb-4 text-pink-700">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-input w-full mb-2 text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input w-full mb-2"
      />
      <button onClick={handleLogin} className="btn bg-blue-500 text-white">
        Login
      </button>
    </div>
  </div>

  
);
};

export default Login;
