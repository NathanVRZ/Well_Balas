import styled from 'styled-components';


export const Grid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 1fr;
    margin-left: 45vmin;
    margin-top: 3vmin;

    #Q1 { 
    max-height: 22vmin;
    margin: 20px auto 0;
    padding: 0 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 1vmin;
    }


    #Q2 {
    max-width: 400vmin;
    margin: 20px auto 0;
    padding: 0 20vmin;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 1vmin;
    margin-left: 6.5vmin;
    }

    
    #Q3 {
    max-width: 400vmin;
    margin: 20px auto 0;
    padding: 0 25vmin;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 1vmin;
    margin-left: 25vmin; 
    }

    p {
        text-align: center;
        margin-top: 1vmin;
    }

    #loja {
        font-size: 10vmin;
    }

`

export const Sair = styled.div `

    a {
    color: rgba(51,10,0, 0.8);
    height: 5vmin;
    width: 11.5vmin;
    border-radius: 5px;
    border: 2px solid rgba(51,10,0, 0.8);
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    padding: 4vmin;
    margin-left: 49vmin;
    margin-top: -75vmin;
    }

    a:hover {
    background: rgba(51,10,0, 0.8);
    color: #fff;
    }
`
