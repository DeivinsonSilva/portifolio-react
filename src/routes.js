import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import CurriculoVitae from './pages/CurriculoVitae';
import CurriculoLattes from './pages/CurriculoLattes';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/cl" component={CurriculoLattes}/>
                <Route path="/cv" component={CurriculoVitae}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;