import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        produtos: [],
    };

    componentDidMount() {
        this.LoadProducts();
    }

    LoadProducts = async () => {
        const res = await api.get("/");
        // console.log(response.data);
        this.setState({ produtos: res.data.response });
    };

    render() {
        const { produtos } = this.state;
        return (
            <div className="lista-prod">
                {produtos.map(produto => (
                    <article key={produto.idProduto}>
                        <strong>{produto.nome}</strong>
                        <p>Unidades: {produto.quantidade}</p>
                    </article>
                ))}
            </div>
        )
    }

}