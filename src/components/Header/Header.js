import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import './Header.scss'

const Header = ({info}) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{info.name}</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header