import React from 'react';
import logo from '../logo.svg';

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
            <h1>
                Ce site est en cours de construction ... <br></br>(mais c'est pour bientôt)
                        </h1>
        </div>
    );
};

export default Construction;