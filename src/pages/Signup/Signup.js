import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';
import './Signup.scss'
import {AiOutlineUser} from 'react-icons/ai';
import {FiLock} from 'react-icons/fi';

const signupUrl = `${process.env.REACT_APP_URL}/signup`;

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(signupUrl, {
      username: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value
    })
    .then((response) => {
      navigate('/login');
    });
    // Here send a POST request to signupUrl with username, name and password data
  };

  return (
    <div className="login">
      <form onSubmit={handleSignup} className="login__container">
        <div className="top">
          <h1>Sign Up</h1>
        </div>
        <div className="input-field">
          <AiOutlineUser className='login__icon'/>
          <input type="text" className="input" name="username" placeholder="Username" />
        </div>

        <div className="input-field">
          <FiLock className='login__icon'/>
          <input type="Password" className="input" name='password' placeholder="Password" />
        </div>

        <div className="input-field">
          <input type="submit" className="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Signup
