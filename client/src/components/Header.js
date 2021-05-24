import React from 'react'
import downArrow from '../assets/arrow-down.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>PORT<br />FOL<br />IO</h1>
                <div className='text'>
                    <h2>Bienvenue sur mon porfolio professionnel.</h2>
                    <p> Vous y trouverez : mon CV, mon parcours, mes travaux, mes projets de développement web, du maquettage, du graphisme, de l'illustration traditionelle et digitale. <br/> <br/> Cette application web est réalisée avec amour par moi-même. Sur ce je vous souhaite une bonne navigation</p>
                    <hr></hr>
                    <div className="btn-container">
                        <button className='btn-alt-secondary'><a href="#propos">A propos</a></button>
                        <button className='btn-primary'><a href="#contact-me">Contactez moi</a></button>
                    </div>
                </div>
            </div>
            <img className="down-arrow" src={downArrow} alt="scroll-down icon" href="#work"></img>
        
        </div>
    );
};

export default Header;