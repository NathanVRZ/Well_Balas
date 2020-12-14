import React from 'react';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';
import './styled.css'



const Login = () => {
    const hist = useHistory();


    const[form, setForm] = React.useState({
        Email: '',
        senha: ''
    })

    async function handleSubmit(event) {
        event.preventDefault();
        await api.post('/usuarios/login', {
            Email: form.Email,
            senha: form.senha,
        }).then (function(res){
            localStorage.setItem('idUsuario', res.data.idUsuario);
            if (res.data.admin === 1){
                hist.push('/admin')
            }else {
                hist.push('/usuario')
            }
            console.log(res)
        })
    }

    function handleChange({target}) {
        const{id, value} = target;
        setForm({
            ... form,
            [id]: value
        })
    }

    return (
        <div className="fundo">
            <section className="loginbox">
                <h1>Entrar</h1>
                <form id="form_login" className="box" onSubmit={handleSubmit}>
                    <label htmlFor="Email">
                        <input type="text" id="Email" placeholder="email" name="Email" onChange={handleChange} />
                    </label>
                    <br />
                    <label htmlFor="senha">
                        <input type="password" id="senha" placeholder="Senha" name="senha" onChange={handleChange} />
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