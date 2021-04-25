import React from 'react';

const navBar = () => {
    return (
        <div>
            <nav className="nav">
                <figure>
                    <img className="logo" src="" alt="Logo du portfolio"></img>
                    <h1>Tom Pires Cruz</h1>
                </figure>
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

export default navBar;