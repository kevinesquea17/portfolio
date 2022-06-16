import React from 'react'
import {BsCheckLg} from 'react-icons/bs';
import './services.css';

const Services = () => {
  return (
    <section id="services">
        <h5>Habilidades y Servicios</h5>
        <h2>Servicios</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>Diseño UI/UX</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Diseño de interfaz atractiva y consistente.</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Diseño responsive, animaciones e interacciones con el usuario, elementos de accesibilidad, y demás aspectos visuales.</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Contenido directo y bien estructurado.</p>
                    </li>
                </ul>
            </article>
            {/* END UI/UX */}

            <article className="service">
                <div className="service__head">
                    <h3>Desarollo Web</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Diseño y desarrollo de página web a su medida utilizando las tecnologías que mas se adaptan a sus necesidades.</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Desarrollo soluciones de software para aquellas empresas que desean resolver temas puntuales brindando la mejor solución para sus necesidades.</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Desarrollo tiendas online con o sin integración a pasarelas de pago, ofreciendo un fácil y rápido sistema de administración para sus productos.</p>
                    </li>
                </ul>
            </article>
            {/* END WEB DEVEPLOMENT */}

            <article className="service">
                <div className="service__head">
                    <h3>Contenido Web</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Contenido valioso que permita captar la atención de los usuarios y aporte una identidad diferente de la competencia</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Creación de contenidos interesantes y atractivos.</p>
                    </li>
                    <li>
                        <BsCheckLg className='service__list-icon' />
                        <p>Optimización del contenido web</p>
                    </li>
                </ul>
            </article>
            {/* END CONTENT CREATION */}
        </div>
    </section>
  )
}

export default Services