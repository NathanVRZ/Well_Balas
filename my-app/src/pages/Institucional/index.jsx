import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default class institucional extends Component {
  render() {
    return (
      <div>
        <section id="home">
          <nav>
            <ul id="lista1">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
            </ul>
            <div>
              <center>
                <h1 className="logo">Well Balas</h1>
              </center>
            </div>
            <ul id="lista2">
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
            </ul>
          </nav>

          <div className="filtro">
            <center>
              <h1>Well Balas</h1>
              <p>As melhores balas caramelizadas do RJ</p>
            </center>
          </div>

        </section>

        <section id="sobre">
          <center>
            <h1 className="H1Sobre">
              Sobre
            </h1>
          </center>
          <div className="box-about">
            <img src="imagens/sobre.svg" alt="" />
            <p>
              A Well Balas surgiu em 2018, 
              depois de anos trabalhando vendendo empadas na barraca de terceiros, então Wellington decidiu abrir uma 
              própria venda de balas de coco caramelizadas, começando com apenas ele vendendo 
              e hoje virou fornecedor de 7 lojas e mercadinhos do centro do Rio de Janeiro.
            </p>
          </div>
        </section>

        <section id="produtos">
          <center>
            <h1 className="h1Prod">
              Produtos
            </h1>
          </center>
          <div className="box-prod">
            <img className="doceP" src="./imagens/doce.svg" alt="" />

            <div className="card">
              <img src="./imagens/BalaA.jpg" alt="Bala caramelizada" style={{ width: '100%' }} />
              <h1>Bala de coco</h1>
              <p className="price">R$ 1,00</p>
              <p>Sabor: Caramelo</p>
              <br />
              <p><Link to="/login" className="botao">Encomendar</Link></p>
            </div>

          </div>
        </section>

        <footer id="rodape">
          <article>
            <img className="logofooter" src="imagens/logopp.png" alt="" />
          </article>

          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
          </div>

          <div>
            <p className="gmail">

            </p>
          </div>

        </footer>
      </div>
    )
  }
}