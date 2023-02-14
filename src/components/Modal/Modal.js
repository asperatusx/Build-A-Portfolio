import React, { useState } from 'react'
import './Modal.scss'
import Drawer from 'react-modern-drawer'
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'
import {FaAlignJustify} from 'react-icons/fa'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
 
  return (
    <>
      <button className='modal' onClick={toggleDrawer}><FaAlignJustify className='modal__btn'/></button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <Link to='/' onClick={toggleDrawer}>Homepage</Link>
        <Link to='/login' onClick={toggleDrawer}>Login</Link>
        <Link to='/signup' onClick={toggleDrawer}>SignUp</Link>
      </Drawer>
    </>
    
)
}

export default Modal