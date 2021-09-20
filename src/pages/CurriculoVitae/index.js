import React from 'react';
import cv from '/home/deivinson/Documentos/github/hello/portifolio-react/src/doc/cv.pdf';
import '/home/deivinson/Documentos/github/hello/portifolio-react/src/pages/vitae.css';

import Iframe from 'react-iframe';

function CurriculoVitae(){
    return(
        <div>
            <Iframe src={cv} />
        </div>
    ); 
};

export default CurriculoVitae;