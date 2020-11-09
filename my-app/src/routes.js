import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/Institucional';
import produtos from './pages/produtos';
import login from './pages/login';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/produtos' component={produtos} />
                <Route exact path='/login' component={login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;