import React from 'react';
import Logo from '../components/Logo';

const NotFound = () => {
    return (
        <div className="not-found">
            <Logo /> 
            <h1>Erreur: Vous êtes allé trop loin ! (revenez en arrière)</h1>
        </div>
    );
};

export default NotFound;