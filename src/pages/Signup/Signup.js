import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';
import './Signup.scss'

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
    <div className='signup signup__container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup