import React, { Component } from 'react';
import api from '../../services/api';
import './Header/style.css';
import Header from './Header';

import * as S from './style.js';

export default class produtos extends Component {
    state = {
        ingredientes: [],
    };

    componentDidMount() {
        this.LoadIngrediente();
    }

    LoadIngrediente = async () => {
        const res = await api.get("/ingredientes");
        this.setState({ ingredientes: res.data.response });
    };

    render() {
        const { ingredientes } = this.state;
        return (
            <div>
                <Header />
                <S.Icon4>
                        <a href="/admin"><i className="fas fa-home"></i></a>
                        <a href="./addingrediente"><i className="fas fa-plus-square"></i></a>
                </S.Icon4>
                <S.List2>
                    {ingredientes.map(produto => (
                        <article key={produto.ingrediente}>
                            <strong>{produto.nome}</strong>
                            <p>Unidades: {produto.quantidade}</p>
                            <a href="cara.html">Editar</a>
                        </article>
                    ))}
                </S.List2>
            </div>
        )
    }

}