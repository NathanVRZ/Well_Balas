import React from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './style.css'



const AddProduto = () => {
    const [values, setValues] = React.useState({
        nome: "",
        quantidade: ""
    });
    const hist = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();

        api.post('/produtos', values)
        .then((response) => {
            hist.push('/produtos')
        })
    }

        return (
        <section className="loginbox">
            <h1>CADASTRO DE PRODUTO</h1>
            <form id="form_produto" className="box" onSubmit={onSubmit}>
                <label htmlFor="nome">
                    <p className="cadasp">Nome</p>
                    <input type="text" id="nome" name="nome" onChange={onChange} />
                </label>
                <br />
                <label htmlFor="quantidade">
                    <p className="cadasp">Quantidade</p>
                    <input type="text" id="quantidade" name="quantidade" onChange={onChange} />
                </label>
                <br />
                <button className="btn" id="btn_entrar">CADASTRAR</button>
            </form>
        </section>
    )
}

export default AddProduto;