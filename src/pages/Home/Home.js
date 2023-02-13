import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
    
  )
}

export default Home