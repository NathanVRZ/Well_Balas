import React, { Component } from 'react';
import api from '../../services/api';

import './Header/style.css';
import './style.css';

import Header from './Header';
// import produtos from './pages/Produtos';

export default class produtos extends Component {
    state = {
        ingredientes: [],
    };

    componentDidMount() {
        this.LoadIngrediente();
    }

    LoadIngrediente = async () => {
        const res = await api.get("/ingredientes");
        // console.log(response.data);
        this.setState({ ingredientes: res.data.response });
    };

    render() {
        const { ingredientes } = this.state;
        return (
            <div>
                <Header />
            <div className="lista-ing">
                {ingredientes.map(produto => (
                    <article key={produto.ingrediente}>
                        <strong>{produto.nome}</strong>
                        <p>Unidades: {produto.quantidade}</p>
                        <a href="cara.html">Editar</a>
                    </article>
                ))}
            </div>
            </div>
        )
    }

}