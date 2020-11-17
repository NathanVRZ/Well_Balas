import React, { Component } from 'react';
import api from '../../services/api';
// import { Link } from 'react-router-dom';


import './style.css'

export default class addproduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            quantidade: ""
        }
        
        // this.History = useHistory()

        this.onChange = (ev) => {
            // const {name, value} = ev.target;
            this.setState({nome: ev.target.value});

            console.log(ev.target);
            }

            this.onChange1 = (ev) => {
                // const {name, value} = ev.target;
                
                this.setState({quantidade: ev.target.value});
                }
            
            this.onSubmit = (ev) => {
            ev.preventDefault();
            api.post("/produtos", {
                nome: this.state.nome,
                quantidade: this.state.quantidade
            });
            }
    }




    render() {
        return(
            <section className="loginbox">
            <h1>CADASTRO DE PRODUTO</h1>
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
                <button className="btn" id="btn_entrar">CADASTRAR</button>
            </form>
        </section>
        )
    }
}