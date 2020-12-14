import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

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
import usuarios from './pages/usuarios';
import editaringre from './pages/editaringre';

const Privada = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        localStorage.getItem('idUsuario')?(
            <Component {...props} />
        ):(
            <Redirect to={{pathname:'/login', state:{from: props.location}}} />
        )
    )} />
) 

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={institucional} />
                <Route exact path='/produtos' component={produtos} />
                <Route exact path='/login' component={login} />
                <Route exact path='/cadastro' component={cadastro} />
                <Privada exact path='/clientes' component={clientes} />
                <Privada exact path='/ingredientes' component={ingredientes} />
                <Privada exact path='/admin' component={admin} />
                <Privada exact path='/addproduto' component={addproduto} />
                <Privada exact path='/addingrediente' component={addingredientes} />
                <Privada exact path='/editarprod/' component={editarprod} />
                <Privada exact path='/editaringre/' component={editaringre} />
                <Privada exact path='/deletarprod/:idProduto' component={deletarprod} />
                <Privada exact path='/usuario' component={usuarios} />
                <Route component={notfound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;