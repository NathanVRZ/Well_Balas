import React, { Component } from 'react';
import api from '../../services/api';
import './styled.css';

export default class cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            senha: "",
            Loja: "",
            Rua: "",
            CNPJ: "",
            UnidadesAssinadas: ""
        }
        
        this.onChange = (ev) => {
            this.setState({ Email: ev.target.value });
        }
        
        this.onChange1 = (ev) => {
            this.setState({ senha: ev.target.value });
        }
        
        this.onChange2 = (ev) => {
            this.setState({ Loja: ev.target.value });
        }
        
        this.onChange3 = (ev) => {
            this.setState({ Rua: ev.target.value });
        }
        
        this.onChange4 = (ev) => {
            this.setState({ CNPJ: ev.target.value });
        }
        
        this.onChange5 = (ev) => {
            this.setState({ UnidadesAssinadas: ev.target.value });
        }
        
        this.onSubmit = (ev) => {
            ev.preventDefault();
            api.post("/usuarios/cadastro", {
                Email: this.state.Email,
                senha: this.state.senha,
                Loja: this.state.Loja,
                Rua: this.state.Rua,
                CNPJ: this.state.CNPJ,
                UnidadesAssinadas: this.state.UnidadesAssinadas
            })
        }
    }
    

    render() {
        return (
            <div className="fundo1">
                <section className="loginbox1">
                    <h1>CADASTRAR</h1>
                    <form id="form_login" className="box" onSubmit={this.onSubmit}>
                        <label htmlFor="Email">
                            <input type="text" id="Email" placeholder="email" name="Email" value={this.state.Email} onChange={this.onChange} />
                        </label>
                        <br />
                        <label htmlFor="senha">
                            <input type="password" id="senha" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.onChange1}/>
                        </label>
                        <br />
                        <label htmlFor="Loja">
                            <input type="text" id="Loja" placeholder="Loja" name="Loja" value={this.state.Loja} onChange={this.onChange2}/>
                        </label>
                        <br />
                        <label htmlFor="Rua">
                            <input type="text" id="Rua" placeholder="Endereço" name="Rua" value={this.state.Rua} onChange={this.onChange3}/>
                        </label>
                        <br />
                        <label htmlFor="CNPJ">
                            <input type="text" id="CNPJ" placeholder="CNPJ" name="CNPJ" value={this.state.CNPJ} onChange={this.onChange4}/>
                        </label>
                        <br />
                        <label htmlFor="UnidadesAssinadas">
                            <input type="text" id="UnidadesAssinadas" placeholder="Unidades" name="UnidadesAssinadas" value={this.state.UnidadesAssinadas} onChange={this.onChange5}/>
                        </label>
                        <button className="btn" id="btn_entrar">CADASTRAR</button>
                    </form>

                    <div>
                        <button className="btn" id="btn_entrar">INICIO</button>
                        <button className="btn" id="btn_entrar1">LOGIN</button>
                    </div>

                </section>
            </div>
        )
    }
}