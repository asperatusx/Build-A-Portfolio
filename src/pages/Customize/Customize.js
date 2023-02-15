import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './Customize.scss'

const BACKEND_ENDPOINT = "/customize";

const Customize = () => {
  const [token, setToken] = useState(null);
  const form = useRef();
  const form2 = useRef();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setToken(token);
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    if (form.current.skill.value) {
      const newSkills = {
        skills: form.current.skill.value
      }
      axios.post(`${process.env.REACT_APP_URL}${BACKEND_ENDPOINT}`, newSkills, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    axios.post(`${process.env.REACT_APP_URL}${BACKEND_ENDPOINT}`, newProjects, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    e.target.reset();
  }

  return (
    <>
      <form className='form form__skills' ref={form} onSubmit={handleSubmit}>
        <input type="text" name='skill' placeholder='Enter a skill' />
        <button type='submit' className='btn btn-primary'>Add Skill</button>
      </form>
      <form className='form form__projects' ref={form2} onSubmit={addProject}>
        <input type="text" name='projectTitle' placeholder='Enter a project title' />
        <input type="text" name='projectImage' placeholder='Add a project image link' />
        <input type="text" name='projectLink' placeholder='Enter a project link' />
        <button type='submit' className='btn btn-primary'>Add Project</button>
      </form>
    </>
  )
}

export default Customize