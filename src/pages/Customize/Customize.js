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
    <div className="add">
      <div className="top">
        <h2>Add Skill</h2>
      </div>
      <form className='login__container' ref={form} onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" className='input' name='skill' placeholder='Enter a skill' />
        </div>
        <div className="input-field">
         <button type='submit' className='btn btn-primary'>Add Skill</button>
        </div>
      </form>
      <div className="top">
        <h2>Add Project</h2>
      </div>
      <form className='login__container' ref={form2} onSubmit={addProject}>
        <div className="input-field">
          <input type="text" className='input' name='projectTitle' placeholder='Enter a project title' />
        </div>
        <div className="input-field">
          <input type="text" className='input' name='projectImage' placeholder='Add a project image link' />
        </div>
        <div className="input-field">
          <input type="text" className='input' name='projectLink' placeholder='Enter a project link' />
        </div>
        <div className="input-field">
          <button type='submit' className='btn btn-primary'>Add Project</button>
        </div>
      </form>
    </div> 
  )
}

export default Customize