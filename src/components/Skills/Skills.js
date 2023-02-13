import React from 'react'
import './Skills.scss'
import { GiCheckMark } from 'react-icons/gi'

const Skills = ({skills}) => {
  const newSkills = skills.map((skill, index) => {
    return (
      <article key={index} className="experience__details">
        <GiCheckMark className='experience__details-icon' />
        <div>
          <h4>{skill}</h4>
        </div>
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