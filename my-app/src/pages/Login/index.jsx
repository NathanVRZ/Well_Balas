import React, { Component } from 'react';
import './styled.css'

export default class login extends Component {
    render() {
        return (
            <div className="fundo">
                <section className="loginbox">
                    <h1>Entrar</h1>
                    <form id="form_login" className="box" method="post" onsubmit="return entrar()">
                        <input type="text" placeholder="email" name="Email"/>
                        <br/>
                        <input type="password" placeholder="Senha" name="senha"/>
                        <br/>
                        <button className="btn" id="btn_entrar">ENTRAR</button>
                    </form>

                    <div>
                    <button className="btn" id="btn_entrar">INICIO</button>
                    <button className="btn" id="btn_entrar1">CADASTRAR</button>
                    </div>

                </section>
            </div>
        )
    }
}