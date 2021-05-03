import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <Logo/>
                <ul className="nav-menu">
                    <li className="nav-item">ACCUEIL</li>
                    <li className="nav-item">DEVELOPPEMENT WEB</li>
                    <li className="nav-item">ILLUSTRATION & GRAPHISME</li>
                    <li className="nav-item">CV & PARCOURS</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;