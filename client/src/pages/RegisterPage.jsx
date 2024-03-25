import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function registerUser(ev){ //async await function*
    ev.preventDefault();
    try {
      await axios.post('/register',{ //async await function*
        name,
        email,
        password,
      });
      alert('Registraion successful. Now you can log in');
    } catch (e) {
      alert('Registraion failed. Please try again later.');
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-center text-4xl mb-4">Register</h1>
          <form className="max-w-lg mx-auto" onSubmit={registerUser}>
            <input type="text" 
              placeholder="John Doe"
              value={name} 
              onChange={ev => setName(ev.target.value)}/>
            <input type="email" 
              placeholder="your@email.com"
              value={email} 
              onChange={ev => setEmail(ev.target.value)}/>  
            <input type="password" 
              placeholder="password"
              value={password} 
              onChange={ev => setPassword(ev.target.value)}/>
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
            Already a member? 
            <Link className="underline text-black" to={'/login'}>Login</Link>
            </div>
          </form>
      </div>
    </div>
  );
}