import React from 'react'
import './Projects.scss'

const Projects = ({projects}) => {
  const newProjects = Array.from(projects).map((project) => {
    return (
      <article className="portfolio__item" key={project.id}>
        <div className="portfolio__item-image">
          <img src={project.image} alt={project.title} />
        </div>
        <h3>{project.title}</h3>
        <div className="portfolio__item-cta">
          <a href={project.github} className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
    )
  })

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {newProjects}
      </div>
    </section>
  )
}

export default Projects