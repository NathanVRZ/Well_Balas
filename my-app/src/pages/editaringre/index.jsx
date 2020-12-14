import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class editaringre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            quantidade: "",
            idIngrediente: ""
        }
        
        this.onChange = (ev) => {
            this.setState({nome: ev.target.value});
            }

            this.onChange1 = (ev) => {                
                this.setState({quantidade: ev.target.value});
                }

                this.onChange2 = (ev) => {                
                    this.setState({idIngrediente: ev.target.value});
                    }
            
            this.onSubmit = (ev) => {
            ev.preventDefault();
            api.put("/Ingredientes", {
                nome: this.state.nome,
                quantidade: this.state.quantidade,
                idIngrediente: this.state.idIngrediente

            });
            }
    }

    render() {
        return(
            <section className="loginbox">
            <h1>EDITAR INGREDIENTES</h1>
            <form id="form_Ingrediente" className="box" onSubmit={this.onSubmit}>
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
                <label htmlFor="idIngrediente">
                    <p className="cadasp">Identificador</p>
                    <input type="text" id="idIngrediente" value={this.state.idIngrediente} name="idIngrediente" onChange={this.onChange2}/>
                </label>
                <br/>
                <button className="btn" id="btn_entrar">EDITAR</button>
            </form>
        </section>
        )
    }
}