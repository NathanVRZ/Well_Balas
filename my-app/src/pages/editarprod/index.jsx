import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class addproduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            quantidade: "",
            idProduto: ""
        }
        
        this.onChange = (ev) => {
            this.setState({nome: ev.target.value});
            }

            this.onChange1 = (ev) => {                
                this.setState({quantidade: ev.target.value});
                }

                this.onChange2 = (ev) => {                
                    this.setState({idProduto: ev.target.value});
                    }
            
            this.onSubmit = (ev) => {
            ev.preventDefault();
            api.put("/produtos", {
                nome: this.state.nome,
                quantidade: this.state.quantidade,
                idProduto: this.state.idProduto

            });
            }
    }

    render() {
        return(
            <section className="loginbox">
            <h1>EDITAR PRODUTO</h1>
            <form id="form_produto" className="box" onSubmit={this.onSubmit}>
                <label htmlFor="nome">
                <p className="cadasp">Nome</p>
                <input type="text" id="nome" value={this.state.nome} name="nome" onChange={this.onChange}/>
                </label>
                <br/>
                <label htmlFor="quantidade">
                <p className="cadasp">Quantidade</p>
                <input type="text" id="quantidade" value={this.state.quantidade} name="quantidade" onChange={this.onChange1}/>
                </label>
                <br/>
                <label htmlFor="idProduto">
                    <p className="cadasp">Identificador</p>
                    <input type="text" id="idProduto" value={this.state.idProduto} name="idProduto" onChange={this.onChange2}/>
                </label>
                <br/>
                <button className="btn" id="btn_entrar">EDITAR</button>
            </form>
        </section>
        )
    }
}