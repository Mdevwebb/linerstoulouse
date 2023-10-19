import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Nav = () => {
    return (
  <div className="nav">
    <Logo/>
    <ul>
    <NavLink to="/">
        <li>Accueil</li>
    </NavLink>
    <NavLink to="/about">
        <li>A propos</li>
    </NavLink>
    <NavLink to="/engagements">
        <li>Nos engagements</li>
    </NavLink>
    <NavLink to="/offres">
        <li>Nos offres</li>
    </NavLink>
    <NavLink to="/form">
        <li>Devis</li>
    </NavLink>
    </ul>
  </div>
    );
};

export default Nav;