import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import './styled.css'

const Cadastro = () => {
    const [values, setValues] = React.useState({
        Email: "",
        senha: "",
        Loja: "",
        Rua: "",
        CNPJ: "",
        UnidadesAssinadas: ""
    });
    const hist = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        api.post('/usuarios/cadastro', values)
            .then((response) => {
                hist.push('/login')
            })
    }

    return (
        <div className="fundo1">
            <section className="loginbox1">
                <h1>CADASTRAR</h1>
                <form id="form_login" className="box" onSubmit={onSubmit}>
                    <label htmlFor="Email">
                        <input type="text" id="Email" placeholder="email" name="Email" onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="senha">
                        <input type="password" id="senha" placeholder="Senha" name="senha"  onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="Loja">
                        <input type="text" id="Loja" placeholder="Loja" name="Loja" onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="Rua">
                        <input type="text" id="Rua" placeholder="Endereço" name="Rua"  onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="CNPJ">
                        <input type="text" id="CNPJ" placeholder="CNPJ" name="CNPJ" onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="UnidadesAssinadas">
                        <input type="text" id="UnidadesAssinadas" placeholder="Unidades" name="UnidadesAssinadas" onChange={onChange} />
                    </label>
                    <button className="btn" id="btn_entrar">CADASTRAR</button>
                </form>

                <div>
                    <a className="btn" id="btn_entrar" href="/" >INICIO</a>
                    <a className="btn" id="btn_entrar1" href="/login">LOGIN</a>
                </div>

            </section>
        </div>
    )
}

export default Cadastro;