import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
    
  )
}

export default Home