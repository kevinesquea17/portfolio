import React from 'react'
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenidos, Soy</h5>
        <h1>Kevin Esquea</h1>
        <h5 className="text-light">Desarrollador FullStack</h5>
        <CTA />
        <div className="me"></div>
        <a href="#contact" className='scroll-down'>Scroll down</a>
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header
