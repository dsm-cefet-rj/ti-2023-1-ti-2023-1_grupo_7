"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Arapey } from 'next/font/google';

ChartJS.register(ArcElement, Tooltip, Legend);

function __getTotal(array,tipo){
  let accumulator = 0;
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element.tipo===tipo){
          accumulator+=element.valor*element.qnt;
      }
  }
  return accumulator
}
function __getData(array){
  const valores = [];
  valores.push(__getTotal(array,"Renda Fixa"));
  valores.push(__getTotal(array,"Ação"));
  valores.push(__getTotal(array,"Fundo Imobiliário"));
  valores.push(__getTotal(array,"Provento"));
  return valores;
}

export default function Aplication(props) {
  if (typeof props.data[0]===typeof undefined) {return null;}
  const data = {
    labels: ['Renda Fixa', 'Ações', 'Fundos Imobiliários', 'Proventos'],
    datasets: [
      {
        label: 'Valor',
        data: __getData(props.data),
        backgroundColor: [
          'rgba(255, 30, 50, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 20, 1)',
          'rgba(75, 192, 75, 1)',
        ],
        borderColor: [
          'rgba(255, 30, 50, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 20, 1)',
          'rgba(75, 192, 75, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return( 
  <div style={{width: 'auto',height:'30vh',marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'}}>
    <Doughnut data={data} updateMode='resize' redraw={true}/>
  </div>
  );
}
