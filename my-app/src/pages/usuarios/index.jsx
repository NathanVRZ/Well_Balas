import React from 'react';
import * as S from './style.js';
import { useHistory } from 'react-router-dom';

const Usuario = () => {

    const hist = useHistory();

    function HandleClick() {
        localStorage.removeItem('idUsuario');
        hist.push('/login');
    }

    return (
        <div>
            <S.Grid>
                <article id="Q1">
                    <h1 id="loja">🏪</h1>
                    {/* <img src="./imgs/boneco.png" alt=""/> */}
                    <p>Lojista</p>
                </article>
                <article id="Q">
                    {/* <p>Email: graodaTerra@terra.com.br </p>
                    <p>CNPJ: 10.994.231/0001-11 </p>
                    <p>Endereço: Rua das oliveiras 102 - RJ</p>
                    <p> Unidades Assinadas: 780</p> */}
                </article>
                <article id="Q3">
                    <div>
                        <h3>Horarios:</h3>
                        <p>Segunda-Feira: 10h30 Madureira</p>
                        <p>Terça-Feira: 10h30 Cascadura</p>
                        <p>Quarta-Feira: 10h30 Oswaldo Cruz</p>
                        <p>Quinta-Feira: 10h30 Vaz Lobo</p>
                        <p>Sexta-Feira: 10h30 Cavalcanti</p>
                    </div>
                </article>
            </S.Grid>
            <S.Sair>
                <a onClick={HandleClick}>Sair</a>
            </S.Sair>
        </div>
    )
}

export default Usuario;