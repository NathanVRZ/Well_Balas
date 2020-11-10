import React, { Component } from 'react';
import api from '../../services/api';

import './Header/style.css';
import './style.css';

import Header from './Header';
// import produtos from './pages/Produtos';

export default class clientes extends Component {
    state = {
        usuarios: [],
    };

    componentDidMount() {
        this.LoadClientes();
    }

    LoadClientes = async () => {
        const res = await api.get("/usuarios");
        // console.log(response.data);
        this.setState({ usuarios: res.data.response });
    };

    render() {
        const { usuarios } = this.state;
        return (
            <div>
                <Header />
            <div className="lista-clientes">
                {usuarios.map(cliente => (
                    <article key={cliente.idUsuario}>
                        <strong>{cliente.Loja}</strong>
                        <p>Endereço: {cliente.Rua}</p>
                        <a href="cara">Editar</a>
                    </article>
                ))}
            </div>
            </div>
        )
    }

}