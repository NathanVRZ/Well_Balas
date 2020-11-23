import React from 'react';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';
import './styled.css'



const Login = () => {
    const [values, setValues] = React.useState({
        Email: "",
        senha: ""
    });
    const hist = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        api.post('/usuarios/login', values)
            .then((response) => {
                hist.push('/admin');
            });
    }

    return (
        <div className="fundo">
            <section className="loginbox">
                <h1>Entrar</h1>
                <form id="form_login" className="box" onSubmit={onSubmit}>
                    <label htmlFor="Email">
                        <input type="text" id="Email" placeholder="email" name="Email" onChange={onChange} />
                    </label>
                    <br />
                    <label htmlFor="senha">
                        <input type="password" id="senha" placeholder="Senha" name="senha" onChange={onChange} />
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

export default Login;