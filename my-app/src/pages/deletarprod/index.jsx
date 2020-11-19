import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class deletarprod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idProduto: []
        }
                this.onChange2 = (ev) => {                
                    this.setState({idProduto: ev.target.value});
                    }
            
            this.onSubmit = (ev) => {
            ev.preventDefault();
            api.delete("/produtos", {
                idProduto: this.state.idProduto
            });
            }
    }

    render() {
        return(
            <section className="loginbox">
            <h1>DELETAR PRODUTO</h1>
            <form id="form_produto" className="box" onSubmit={this.onSubmit}>
                <label htmlFor="idProduto">
                    <p className="cadasp">Identificador</p>
                    <input type="text" id="idProduto" value={this.state.idProduto} name="idProduto" onChange={this.onChange2}/>
                </label>
                <br/>
                <button className="btn" id="btn_entrar">Deletar</button>
            </form>
        </section>
        )
    }
}