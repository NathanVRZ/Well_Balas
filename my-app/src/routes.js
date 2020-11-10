import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/Institucional';
import produtos from './pages/produtos';
import login from './pages/login';
import cadastro from './pages/cadastro';
import clientes from './pages/clientes';
import ingredientes from './pages/ingredientes';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/produtos' component={produtos} />
                <Route exact path='/login' component={login} />
                <Route exact path='/cadastro' component={cadastro} />
                <Route exact path='/clientes' component={clientes} />
                <Route exact path='/ingredientes' component={ingredientes} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;