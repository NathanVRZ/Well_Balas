import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import * as S from './style.js'
import './Header/style.css';

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
                <S.Icon1>
                    <a href="/admin"><i className="fas fa-home"></i></a>
                    <a href="./addproduto"><i className="fas fa-plus-square"></i></a>
                </S.Icon1>
                <S.Lista1>
                    {produtos.map(produto => (
                        <article key={produto.idProduto}>
                            <strong>{produto.nome}</strong>
                            <p>Unidades: {produto.quantidade}</p>
                            <p>Identificador: {produto.idProduto}</p>
                            <Link to={`/editarprod/${produto.idProduto}`}>Editar</Link>
                            <Link to={`/deletarprod/${produto.idProduto}`}>Deletar</Link>
                        </article>
                    ))}
                </S.Lista1>
            </div>
        )
    }

}