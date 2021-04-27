import React from 'react';
import logo from '../logoPortfolioWhite.svg'

const Logo = () => {
    return (
        <div className="logo">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            {/* <h1>Tom <br/> Pires Cruz</h1> */}
            
        </div>
    );
};

export default Logo;