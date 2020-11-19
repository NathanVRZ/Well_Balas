import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

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
                <div className="icons1">
                    <center>
                    <a href="./addproduto"><i className="fas fa-plus-square"></i></a>
                    </center>
                </div>
                <div className="lista-prod">
                    {produtos.map(produto => (
                        <article key={produto.idProduto}>
                            <strong>{produto.nome}</strong>
                            <p>Unidades: {produto.quantidade}</p>
                            <p>Identificador: {produto.idProduto}</p>
                            <Link to={`/editarprod/${produto.idProduto}`}>Editar</Link>
                            <Link to={`/deletarprod/${produto.idProduto}`}>Deletar</Link>
                        </article>
                    ))}
                </div>
            </div>
        )
    }

}