import React, { Component } from 'react';
import api from '../../services/api';

import './Header/style.css';
import './style.css';

import Header from './Header';
// import produtos from './pages/Produtos';

export default class produtos extends Component {
    state = {
        produtos: [],
    };

    componentDidMount() {
        this.LoadProducts();
    }

    LoadProducts = async () => {
        const res = await api.get("/produtos");
        // console.log(response.data);
        this.setState({ produtos: res.data.response });
    };

    render() {
        const { produtos } = this.state;
        return (
            <div>
                <Header />
            <div className="lista-prod">
                {produtos.map(produto => (
                    <article key={produto.idProduto}>
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