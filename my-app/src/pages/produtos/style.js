import styled from 'styled-components';

export const Lista1 = styled.div `
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;


article {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
}

article a {
    color: rgba(51,10,0, 0.8);
    height: 42px;
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
}

article a:hover {
    background: rgba(51,10,0, 0.8);
    color: #fff;
}
`

export const Icon1 = styled.div `
    font-size: 8vmin;
    text-align: center;

 i {
    margin: 3vmin;
    transition: 0.25s;
    cursor: pointer;
}

i:hover {
    color: rgba(227,124,0, 0.8);
    text-shadow: 0px 0px 7px #d66c15;
}

a {
    color: black;
}
`


