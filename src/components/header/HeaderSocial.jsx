import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/kevin-esquea-estrada-2357ab1bb/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/kevinesquea17" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial