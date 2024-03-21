import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  function registerUser(ev){
    ev.preventDefault();
    axios.get('http://localhost:3000/test');
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-center text-4xl mb-4">Register</h1>
          <form className="max-w-lg mx-auto" onSubmit={registerUser}>
            <input type="text" placeholder="John Doe"
            value={name} onChange={ev => setName(ev.target.value)}/>
            <input type="email" placeholder="your@email.com"
            value={email} onChange={ev => setEmail(ev.target.value)}/>  
            <input type="password" placeholder="password"
            value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
            Already a member? 
            <Link className="underline text-black" to={'/login'}>Login</Link>
            </div>
          </form>
      </div>
    </div>
  );
}