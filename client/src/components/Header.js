import React from 'react';
import downArrow from '../assets/arrow-down.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>PORT<br />FOL<br />IO</h1>
                <div className='text'>
                    <h2>Bienvenue sur mon porfolio professionnel.</h2>
                    <p> Vous y trouverez mon CV, mes références ou encore mon parcours. Mais aussi mes travaux et mes projets portant sur du développement web, du maquettage jusqu'à du graphisme en passant par de l'illustration traditionelle ou encore digitale. <br/> <br/> Cette application web est réalisée avec amour par moi-même. Sur ce je vous souhaite une bonne navigation</p>
                    <hr></hr>
                    <div className="btn-container">
                        <button className='btn-alt-secondary'><a href="/">A propos</a></button>
                        <button className='btn-primary'><a href="/">Contactez moi</a></button>
                    </div>
                </div>
            </div>
            <img className="down-arrow" src={downArrow} alt="scroll-down icon" href="#work"></img>

        </div>
    );
};

export default Header;