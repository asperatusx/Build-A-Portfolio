import React, { useState } from 'react'
import './Nav.scss'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Nav = ({setToggle}) => {
  const [activeNav, setActiveNav] = useState('#');
  const [toggleOn, setToggleOn] = useState(false);

  function onClickToggle(toggleOn) {
    setToggleOn(!toggleOn);
    setToggle(!toggleOn);
  }

  return (
    <nav>
      <div className="customize">
        <Link to='/customize'>ADD</Link>
      </div>
      <a onClick={() => onClickToggle(toggleOn)} className={toggleOn === true ? 'toggle active' : 'toggle'}>REMOVE</a>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav