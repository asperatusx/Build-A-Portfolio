import React, { useEffect, useState } from 'react'
import './Skills.scss'
import { GiCheckMark } from 'react-icons/gi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'

const Skills = ({ skills, toggle, id }) => {

  const handleClick = () => async (event) => {
    try {
      const token = sessionStorage.getItem("token");
      let skill = event.target.getAttribute('class').split(' ')[1];
      await axios.delete(`${process.env.REACT_APP_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          skill: skill
        }
      });
    }
    catch (error) {
      console.log("unable to delete: ", error);
    }
  }

  const newSkills = skills.map((skill, index) => {

    return (
      <article key={index} className="experience__details">
        <GiCheckMark className='experience__details-icon' />
        <div>
          <h4>{skill}</h4>
        </div>
        {
          toggle && (<AiOutlineDelete className={`delete__btn ${skill}`} onClick={handleClick()} />)
        }

      </article>

    )
  });

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            {newSkills}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills