import './App.scss';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Customize from './pages/Customize/Customize';
import { useState } from 'react';
import axios from "axios";
import Modal from './components/Modal/Modal';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';


function App() {
  // const [isSignedUp, setIsSignedUp] = useState(false);
 
  // // Handle the Signup/Login
  // if (!isSignedUp) return <Signup setIsSignedUp={setIsSignedUp}/>;
  // if (!isLoggedIn) return <Login setIsLoggedIn={setIsLoggedIn}/>;

  return (
    <div className="App">
      <BrowserRouter>
        <Modal/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/:id' element={<Home />}/>
          <Route path='/customize' element={<Customize />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
