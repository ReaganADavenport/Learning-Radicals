import React from 'react';
import './nav.css'

import logo from "../../Assets/logo.png"

const Nav = () => {
    return(
        <div className='Nav'>
            <div className='Logo'>
                <a href='/'><img src={logo}></img></a>
            </div>
            <div className='Links'>
                <a href='/lesson1/study'> <p>Lesson 1</p> </a>
                <a href='/lesson2/study'><p>Lesson 2</p></a>
                <a href=''><p>Lesson 3</p></a>
                <a href=''><p>Lesson 4</p></a>
            </div>
            
        </div>
    )
    };

export default Nav;