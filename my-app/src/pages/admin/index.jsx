import React, { Component } from 'react';
import api from '../../services/api';

import Header from './Header';
import './admin.css'
import Chart from './chartjs'


export default class admin extends Component {
    state = {
        usuarios: [],
    };

    componentDidMount() {
        this.LoadUser();
    }

    LoadUser = async () => {
        const res = await api.get("/usuarios/1");
        // console.log(response.data);
        this.setState({ usuarios: res.data.response });
    };

    render() {
        const { usuarios } = this.state;
        return (
            <div>
                <Header />
                <div className="lista-user">
                    {usuarios.map(usuario => (
                        <article key={usuario.idUsuario}>
                            <strong className="">{usuario.Loja}</strong>
                            <p>Endereço: {usuario.Rua}</p>
                            <p>CNPJ: {usuario.CNPJ}</p>
                        </article>
                    ))}
                </div>
                        <Chart />
                <div className="icons1">
                    <center>
                    <a href="./produtos"><i className="fas fa-warehouse"></i></a>
                    <a href="./ingredientes"><i className="fas fa-cookie"></i></a>
                    <a href="./clientes"><i className="fas fa-store"></i></a>
                    </center>
                </div>
            </div>
        )
    }

}