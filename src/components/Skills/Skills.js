import React, { useEffect, useState } from 'react'
import './Skills.scss'
import { GiCheckMark } from 'react-icons/gi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Skills = ({ skills, toggle, id }) => {

  const notify = () => {
    toast.success('Skill Removed', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

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
      notify();
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
    <section data-aos="fade-bottom" data-aos-delay="200" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out" id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            {newSkills}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Skills