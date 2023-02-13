import React from 'react'
import './Skills.scss'
import { GiCheckMark } from 'react-icons/gi'
import skills from '../../data/skills.json'

const Skills = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            {
              skills.map((skill) => {
                return (
                  <article className="experience__details">
                    <GiCheckMark className='experience__details-icon' />
                    <div>
                      <h4>{skill}</h4>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills