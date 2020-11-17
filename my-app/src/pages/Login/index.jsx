import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styled.css'


export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            senha: ""
        }

        this.onChange = (ev) => {
            this.setState({ Email: ev.target.value });
        }

        this.onChange1 = (ev) => {
            this.setState({ senha: ev.target.value });
        }

        this.onSubmit = (ev) => {
            ev.preventDefault();
            api.post("/usuarios/login", {
                Email: this.state.Email,
                senha: this.state.senha
            });
        }
    }

    render() {
        return (
            <div className="fundo">
                <section className="loginbox">
                    <h1>Entrar</h1>
                    <form id="form_login" className="box" onSubmit={this.onSubmit}>
                        <label htmlFor="Email">
                            <input type="text" id="Email" placeholder="email" name="Email" value={this.state.Email} onChange={this.onChange} />
                        </label>
                        <br />
                        <label htmlFor="senha">
                            <input type="password" id="senha" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.onChange1} />
                        </label>
                        <br />
                        <button className="btn" id="btn_entrar">ENTRAR</button>
                    </form>

                    <div>
                        <Link to="/" className="btn" id="btn_entrar">INICIO</Link>
                        <Link to="/cadastro" className="btn" id="btn_entrar1">CADASTRAR</Link>
                    </div>

                </section>
            </div>
        )
    }
}