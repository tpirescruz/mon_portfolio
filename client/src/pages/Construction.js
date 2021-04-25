import React from 'react';
// import logo from '../logo.svg';
import logo from '../logoPortfolioWhite.svg';


// const random = () => {
//     const bubbleAnimation = document.getElementsByClassName;
// }

const Construction = () => {
    return (
        <div className="all">
            <div className="bubble"></div>
            <div className="bubble bubble3s"></div>
            <div className="bubble bubble6s"></div>
            <div className="bubble bubble-left bubble9s"></div>
            <div className="bubble bubble-right bubble3s"></div>
            <div className="bubble bubble-middle bubble2s"></div>
            <div className="bubble bubble-right bubble3s"></div>
            <img src={logo}
                className="App-logo"
                alt="logo" />
            <h1 className="construction-txt">
                Ce site est en cours de maintenance pour le moment... <br></br> <span>(mais c'est pour bientôt)</span>
                        </h1>
        </div>
    );
};

export default Construction;