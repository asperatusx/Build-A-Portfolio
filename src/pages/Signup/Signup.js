import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';
import './Signup.scss'
import {AiOutlineUser} from 'react-icons/ai';
import {FiLock} from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const signupUrl = `${process.env.REACT_APP_URL}/signup`;

const Signup = () => {
  const navigate = useNavigate();

  const notify = () => {
    toast.success('Signup Successful! Redirecting to Login', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000)
  }

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(signupUrl, {
      username: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value
    })
    .then((response) => {
      notify()
    });
    // Here send a POST request to signupUrl with username, name and password data
  };

  return (
    <div className="login">
      <ToastContainer />
      <form onSubmit={handleSignup} className="login__container">
        <div className="top">
          <h1>Sign Up</h1>
        </div>
        <div className="input-field">
          <AiOutlineUser className='login__icon'/>
          <input type="text" autoComplete='off' className="input" name="username" placeholder="Username" />
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
