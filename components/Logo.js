import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to='/'>

            <i class="fa-solid fa-water"></i>
            </NavLink>
            <p>LinersPro</p>
        </div>
    );
};

export default Logo;