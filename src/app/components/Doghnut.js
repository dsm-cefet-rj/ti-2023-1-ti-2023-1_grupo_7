import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

function __getTotal(array,quantidades,tipo){
  let accumulator = 0;
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element.tipo===tipo){
          accumulator+=element.valor*quantidades.filter((q)=>q.id===element.id).map((x)=>x.qnt)[0];
      }
  }
  return accumulator;
}
function __getData(array,quantidades){
  const valores = [];
  valores.push(__getTotal(array,quantidades,"Renda Fixa"));
  valores.push(__getTotal(array,quantidades,"Ação"));
  valores.push(__getTotal(array,quantidades,"Fundo Imobiliário"));
  valores.push(__getTotal(array,quantidades,"Provento"));
  return valores;
}

export default function Aplication() {
  const carteiraAtual = useSelector(state=>state.carteiraAtual);
  const ativos = useSelector(state=>state.ativos).filter((a)=>{return carteiraAtual.ativos.map(c=>c.id).includes(a.id)});
  const data = {
    labels: ['Renda Fixa', 'Ações', 'Fundos Imobiliários', 'Proventos'],
    datasets: [
      {
        label: 'Valor',
        data: __getData(ativos,carteiraAtual.ativos),
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
  <div style={{width: 'auto',height:'auto',marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'}}>
    <Doughnut data={data} updateMode='resize' redraw={false}/>
  </div>
  );
}
