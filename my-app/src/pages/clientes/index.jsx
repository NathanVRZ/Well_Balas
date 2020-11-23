import React, { Component } from 'react';
import api from '../../services/api';
import * as S from './style.js';
import './Header/style.css';
import Header from './Header';

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
                <S.Icon2>
                    <a href="/admin"><i className="fas fa-home"></i></a>
                </S.Icon2>
            <S.ListaCliente>
                {usuarios.map(cliente => (
                    <article key={cliente.idUsuario}>
                        <strong>{cliente.Loja}</strong>
                        <p>Endereço: {cliente.Rua}</p>
                        <a href="cara">Editar</a>
                    </article>
                ))}
            </S.ListaCliente>
            </div>
        )
    }

}