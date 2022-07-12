import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/codealo-ecommerce.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>Mis Trabajos Recientes</h5>
        <h2>Portafolio</h2>

        <div className="container portfolio__container">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="portfolio-1" />
                </div>
                <h3>Guia Turistica con Wordpress</h3>
                <a href="#" className='btn'>Github</a>
                <a href="http://www.lasalitrosa.com.co/" className='btn btn-primary' target='_blank'>Ver Demo</a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="portfolio-1" />
                </div>
                <h3>Carritos de compras con ReactJS</h3>
                <a href="https://github.com/kevinesquea17/codealo-commerce" className='btn' target='_blank'>Github</a>
                <a href="https://codealoecommerce-kevinesquea.netlify.app/" className='btn btn-primary' target='_blank'>Ver Demo</a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG3} alt="portfolio-1" />
                </div>
                <h3>Administrador de Pacientes de Veterinaria</h3>
                <a href="https://github.com/kevinesquea17/APV_FRONTEND" className='btn' target='_blank'>Github</a>
                <a href="https://administrador-pacientes-veterinaria-kevin-esquea.netlify.app" className='btn btn-primary' target='_blank'>Ver Demo</a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="portfolio-1" />
                </div>
                <h3>Landing Page Restaurante</h3>
                <a href="https://github.com/kevinesquea17/landing-page-restaurant" className='btn'>Github</a>
                <a href="https://landing-page-restaurant-kevin-esquea.netlify.app" className='btn btn-primary' target='_blank'>Ver Demo</a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG5} alt="portfolio-1" />
                </div>
                <h3>Administrador de Tareas</h3>
                <a href="https://github.com/kevinesquea17/todoApp" className='btn' target='_blank'>Github</a>
                <a href="" className='btn btn-primary' target='_blank'>Ver Demo</a>
            </article>

            {/* <article className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={IMG6} alt="portfolio-1" />
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className='btn'>Github</a>
                <a href="" className='btn btn-primary'>Live Demo</a>
            </article> */}
        </div>
    </section>
  )
}

export default Portfolio
