import React from 'react'
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>¿Que habilidades tengo?</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experimentado</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>WORDPRESS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience