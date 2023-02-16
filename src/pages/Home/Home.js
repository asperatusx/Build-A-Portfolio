import React, { useEffect, useState } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router'


const Home = () => {
  const [resume, setResume] = useState(null);
  const [isCurrent, setIsCurrent] = useState(null);
  const [toggle, setToggle] = useState(false);


  let { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const getResume = async () => {
      try {
        let { data } = await axios.get(`${process.env.REACT_APP_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { resume, isCurrent } = data
        setResume(resume);
        setIsCurrent(isCurrent)
      }
      catch (error) {
        console.error(error.message);
      }
    }

    getResume();
  }, [toggle])

  useEffect(() => {

    if (resume === undefined) {
      navigate('/')
    }

    if (resume && isCurrent === false) {
      navigate('/')
    }

  }, [isCurrent, resume])

  if (!resume) {
    return <div>loading.....</div>
  }

  if (isCurrent) {
    return (
      <>
        <Header info={resume.basics} />
        <Nav setToggle={setToggle}/>
        <About />
        <Skills skills={resume.skills} toggle={toggle} id={id} />
        <Projects projects={resume.projects} toggle={toggle} id={id} />
        <Contact />
      </>
  
    )
  }
 
}

export default Home