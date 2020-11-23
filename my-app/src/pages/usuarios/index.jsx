import React, { Component } from 'react';
import * as S from './style.js';


export default class usuarios extends Component {
    render(){
        return(
        <div>
            <S.Grid>
                    <article id="Q1">
                        <h1 id="loja">🏪</h1>
                        {/* <img src="./imgs/boneco.png" alt=""/> */}
                        <p>Grão da terra</p>
                    </article>
                    <article id="Q2">
                        <p>Email: graodaTerra@terra.com.br </p>
                        <p>CNPJ: 10.994.231/0001-11 </p>
                        <p>Endereço: Rua das oliveiras 102 - RJ</p>
                        <p> Unidades Assinadas: 780</p>
                    </article>
                    <article id="Q3">
                        <div>
                            <h3>Horarios:</h3>
                            <p>Segunda-Feira: 10h30 Madureira</p>
                            <p>Terça-Feira: 10h30 Madureira</p>
                            <p>Quarta-Feira: 10h30 Madureira</p>
                            <p>Quinta-Feira: 10h30 Madureira</p>
                            <p>Sexta-Feira: 10h30 Madureira</p>
                        </div>
                    </article>
            </S.Grid>
            <S.Sair>
                <a href="/login">Sair</a>
            </S.Sair>
        </div>
        )
    }
}