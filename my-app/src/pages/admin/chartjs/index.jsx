import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../../services/api';


import './chartJ.css'

const ChartJs = () => {
    const [chartData, setChartData] = useState({});
    const [nome, setnome] = useState({});
    const [quantidade, setquantidade] = useState({});

    const chart = () => {
        let nome1 = [];
        let quantidade1 = [];
        api.get('/produtos').then(res => {
            console.log(res);
            for(const dataObj of res.data.response) {
                quantidade1.push(parseInt(dataObj.quantidade));
                nome1.push((dataObj.nome));
            }
            setChartData({
                labels: nome1,
                datasets: [
                    {
                        label: 'Produtos',
                        data: quantidade1,
                        backgroundColor: [
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                            'rgba(227,124,0, 0.8)',
                        ]
                    }
                ]
            });
        })
        .catch(err => {
            console.log(err);
        });
        console.log(quantidade1);
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div className="chartStyle">
        <h1>Estoque de Produtos</h1>
        <div className="chartcolor">
            <Bar data={chartData}/>
        </div>
        </div>
    )
}

export default ChartJs;