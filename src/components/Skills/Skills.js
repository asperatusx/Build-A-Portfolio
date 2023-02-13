import React from 'react'
import './Skills.scss'
import { GiCheckMark } from 'react-icons/gi'

const Skills = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills