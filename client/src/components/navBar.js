import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <Logo/>
                <ul className="nav-menu">
                    <li className="nav-item">Accueil</li>
                    <li className="nav-item">Développement Web</li>
                    <li className="nav-item">Illustration & Graphisme</li>
                    <li className="nav-item">CV & Parcours</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;