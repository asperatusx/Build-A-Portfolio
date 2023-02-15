import React, { useEffect, useState } from 'react'
import './Modal.scss'
import Drawer from 'react-modern-drawer'
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'
import {FaAlignJustify} from 'react-icons/fa'
import axios from 'axios';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  useEffect(()=> {
    const token = sessionStorage.getItem("token");
    const getId = async () => {
      try {
        let {data} = await axios.get(`${process.env.REACT_APP_URL}/}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("useEffect:", data.user)
        setId(data.user);
      }
      catch (error) {
        console.error(error.message);
      }
    }

    getId();
  }, [isOpen])
 
  console.log("outside useEffect:", id);
  return (
    <>
      <button className='modal' onClick={toggleDrawer}><FaAlignJustify className='modal__btn'/></button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <Link to='/' onClick={toggleDrawer}>Homepage</Link>
        <Link to={`/${id}`} onClick={toggleDrawer}>Personal Portfolio</Link>
        <Link to='/login' onClick={toggleDrawer}>Login</Link>
        <Link to='/signup' onClick={toggleDrawer}>SignUp</Link>
      </Drawer>
    </>
    
)
}

export default Modal