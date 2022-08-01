import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { useState } from 'react';


const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#') }  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#skills" onClick={() => setActiveNav('#skills') } className={activeNav === '#skills' ? 'active' : ''} ><AiOutlineUser /></a>
            <a href="#projects" onClick={() => setActiveNav('#projects') } className={activeNav === '#projects' ? 'active' : ''}><BiBook /></a>
            <a href="#contact"><RiContactsLine /></a>
        </nav>
    )
}

export default Nav