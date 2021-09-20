import React from 'react';
import cv from '/home/deivinson/Documentos/github/hello/portifolio-react/src/doc/cl.pdf';
import '/home/deivinson/Documentos/github/hello/portifolio-react/src/pages/vitae.css';

import Iframe from 'react-iframe';

function CurriculoLattes(){
    return(
        <div>
            <iframe src={cv} />
        </div>
    ); 
};

export default CurriculoLattes;