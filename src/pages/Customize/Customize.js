import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './Customize.scss'

const BACKEND_ENDPOINT = "/customize";


const Customize = () => {
  const form = useRef();
  const form2 = useRef();
 

  function handleSubmit(e) {
    e.preventDefault();
    if (form.current.skill.value) {
      const newSkills = {
        skills: form.current.skill.value
      }
      axios.post(`${process.env.REACT_APP_URL}${BACKEND_ENDPOINT}`, newSkills);
    }
    console.log(form.current.skill.value);
    e.target.reset();
  }

  function addProject(e) {
    e.preventDefault();
    const newProjects = {
      title: form2.current.projectTitle.value,
      image: form2.current.projectImage.value,
      demo: form2.current.projectLink.value
    }
    axios.post(`${process.env.REACT_APP_URL}${BACKEND_ENDPOINT}`, newProjects);
    e.target.reset();
  }

  return (
    <>
      <Link to="/" className='modal'>Homepage</Link>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name='skill' placeholder='Enter a skill' />
        <button type='submit' className='btn btn-primary'>Add Skill</button>
      </form>
      <form ref={form2} onSubmit={addProject}>
        <input type="text" name='projectTitle' placeholder='Enter a project title' />
        <input type="text" name='projectImage' placeholder='Add a project image link' />
        <input type="text" name='projectLink' placeholder='Enter a project link' />
        <button type='submit' className='btn btn-primary'>Add Project</button>
      </form>
    </>
  )
}

export default Customize