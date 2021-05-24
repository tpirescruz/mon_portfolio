import React from 'react';
import Logo from './Logo';
import { NavLink } from  "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                    <Logo />
                <ul className="nav-menu">
                    <li> <NavLink exact to='/' className="nav-item" activeClassName='nav-active'>ACCUEIL</NavLink></li>
                    <li><NavLink exact to ='/dev-web-front'  className="nav-item"  activeClassName='nav-active'>DEVELOPPEMENT WEB</NavLink></li>
                    <li><NavLink exact to ='/illustration' className="nav-item"  activeClassName='nav-active'>ILLUSTRATION & GRAPHISME</NavLink></li>
                    <li><NavLink exact to ='/parcours' className="nav-item"  activeClassName='nav-active'>CV & PARCOURS</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;