import React from 'react'
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Comunícate Conmigo</h5>
      <h2>Contacto</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kevinesq1996@gmail.com</h5>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Kevin Esquea</h5>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+57 304-202-4366</h5>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}

        <form action="">
          <input type="text" name='name' placeholder='Tu Nombre Completo' required />
          <input type="email" name='email' placeholder='Tu Email' required />
          <textarea name="message" rows="7" placeholder= 'Tu Mensaje' required></textarea>
          <input type="submit" className='btn btn-primary' value="Enviar" />
        </form>
      </div>
    </section>
  )
}

export default Contact