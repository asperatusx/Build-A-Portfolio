import React, { useState } from 'react'
import axios from 'axios';
import "./Login.scss"
import { useNavigate } from 'react-router';
import {AiOutlineUser} from 'react-icons/ai';
import {FiLock} from 'react-icons/fi';

const loginUrl = `${process.env.REACT_APP_URL}/login`;


const Login = () => {
  const navigate = useNavigate();

  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(loginUrl, {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(({ data }) => {
        sessionStorage.setItem("token", data.token)
        setIsLoginError(false);
        setErrorMessage("");
        console.log(data.id);
        navigate(`/${data.id}`);
      }).catch(error => {
        setIsLoginError(true);
        setErrorMessage(error.message);
      })

  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__container">
        <div className="top">
          <h1>Login</h1>
          {isLoginError && <label classNameName="error">{errorMessage}</label>}
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

export default Login
