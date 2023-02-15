import React, { useState } from 'react'
import axios from 'axios';
import "./Login.scss"
import { useNavigate } from 'react-router';

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
    .then(({data}) => {
      sessionStorage.setItem("token", data.token)
      setIsLoginError(false);
      setErrorMessage("");
      console.log(data.id);
      navigate(`/${data.id}`);
    }).catch(error => {
      setIsLoginError(true);
      setErrorMessage(error.message);
    })
    

    // Here send a POST request to loginUrl with username and password data
  };

  return (
    <div className='login login__container'>
      <h1>Login</h1>
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          Username: <input type="text" name="username" />
        </div>
        <div className="form-group">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login