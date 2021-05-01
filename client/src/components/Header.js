import React from 'react';
import downArrow from '../assets/arrow-down.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>PORT<br />FOL<br />IO</h1>
                <div className='text'>
                    <p>Bienvenue sur mon porfolio professionnel. Vous y trouverez tous mes travaux </p>
                    <button className='btn-alt-secondary'><a>Contactez moi</a></button>
                </div>
            </div>
            <img className="down-arrow" src={downArrow} alt=""></img>

        </div>
    );
};

export default Header;