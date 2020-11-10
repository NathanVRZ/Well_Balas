import React, { Component } from 'react';
import './styled.css'


export default class login extends Component {
    render() {
        return (
            <div className="fundo1">
                <section className="loginbox1">
                    <h1>CADASTRAR</h1>
                    <form id="form_login" className="box" method="post" onsubmit="return entrar()">
                        <input type="text" placeholder="email" name="Email"/>
                        <br/>
                        <input type="password" placeholder="Senha" name="senha"/>
                        <br/>
                        <input type="text" placeholder="Loja" name="Loja"/>
                        <br/>
                        <input type="text" placeholder="Endereço" name="Rua"/>
                        <br/>
                        <input type="text" placeholder="CNPJ" name="CNPJ"/>
                        <br/>
                        <input type="text" placeholder="Unidades" name="UnidadesAssinadas"/>
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