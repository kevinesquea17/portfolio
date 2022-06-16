import React from 'react'
import './about.css';
import {FiAward} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';
import {FaUsers} from 'react-icons/fa';


const About = () => {
  return (
    <section id="about">
      <h5>Conóceme</h5>
      <h2>Acerca De Mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>6+ Meses</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>4+ Satisfechos</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
              <h5>Proyectos</h5>
              <small>15+ Completados</small>
            </article>
          </div>

          <p>
            Soy un desarrollador frontend muy creativo, pero a la vez técnico. Mi capacidad de adaptar los conocimientos técnicos a las necesidades de las interfaces es lo que me ayuda a construir grandes sitios Web.
          </p>

          <a href="#contact" className="btn btn-primary">Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About