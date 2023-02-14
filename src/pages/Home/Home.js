import React, { useEffect, useState } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'

const Home = () => {
  const [resume, setResume] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState({});
  const [info, setInfo] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const getResume = async () => {
      try {
        let {data} = await axios.get(`${process.env.REACT_APP_URL}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResume(data);
        setSkills(data.skills);
        setProjects(data.projects);
        setInfo(data.basics);
        
      }
      catch (error) {
        console.error(error.message);
      }
    }

    getResume();
  }, [])

  return (
    <>
      <Header info={info}/>
      <Nav />
      <About />
      <Skills skills={skills}/>
      <Projects projects={projects} />
      <Contact />
    </>
    
  )
}

export default Home