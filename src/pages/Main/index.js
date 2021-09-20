import React from 'react';
import { Link } from 'react-router-dom';

function Main(){
    return(
        <div>
            <h1>Página Inicial</h1>
            <p><Link to="/cl" target="_blank">Lattes</Link></p>
            <p><Link to="/cv" target="_blank">Vitae</Link></p>
        </div>
    ); 
};

export default Main;