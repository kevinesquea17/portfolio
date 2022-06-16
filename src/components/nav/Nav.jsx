import {useState} from 'react';
import {AiOutlineHome, AiOutlineUser, AiFillBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {MdContactPhone} from 'react-icons/md';
import './nav.css'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><MdContactPhone /></a>
            <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><AiFillBook /></a>
        </nav>
    )
}

export default Nav