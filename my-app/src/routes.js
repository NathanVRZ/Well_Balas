import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import institucional from './pages/Institucional';
import produtos from './pages/produtos';
import login from './pages/login';
import cadastro from './pages/cadastro';
import clientes from './pages/clientes';
import ingredientes from './pages/ingredientes';
import notfound from './pages/notfound';
import admin from './pages/admin';
import addproduto from './pages/addproduto';
import addingredientes from './pages/addingrediente';
import editarprod from './pages/editarprod';
import deletarprod from './pages/deletarprod';


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
                <Route exact path='/admin' component={admin} />
                <Route exact path='/addproduto' component={addproduto} />
                <Route exact path='/addingrediente' component={addingredientes} />
                <Route exact path='/editarprod/:idProduto' component={editarprod} />
                <Route exact path='/deletarprod/:idProduto' component={deletarprod} />
                <Route component={notfound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;