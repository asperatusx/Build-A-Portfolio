import React from 'react'
import './Projects.scss'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai'



const Projects = ({ projects, toggle, id }) => {

  const handleClick = () => async (event) => {
    try {
      const token = sessionStorage.getItem("token");
      let key = event.target.getAttribute('class').split(' ')[1];
      await axios.delete(`${process.env.REACT_APP_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          key: key
        }
      });
    }
    catch (error) {
      console.log("unable to delete: ", error);
    }
  }

  const newProjects = Array.from(projects).map((project) => {
    return (
      <SwiperSlide className="portfolio__item" key={project.id}>
        <div className="portfolio__item-image">
          <img src={project.image} alt={project.title} />
        </div>
        <h3>{project.title}</h3>
        <div className="portfolio__item-cta">
          <a href={project.github} className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          {
            toggle && (<AiOutlineDelete className={`delete__btn ${project.id}`} onClick={handleClick()} />)
          }

        </div>
      </SwiperSlide>
    )
  })

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <Swiper modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }} className="container portfolio__container">
        {newProjects}
      </Swiper>
    </section>
  )
}

export default Projects