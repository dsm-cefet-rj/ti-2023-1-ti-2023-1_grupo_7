import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import '../styles/ListaAtivos.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function __getTotal(ativos,ativosNaCarteira,tipo){
  let accumulator = 0;
  for (let i = 0; i < ativosNaCarteira.length; i++) {
      let compra = ativosNaCarteira[i];
      let ativoDaCompra = ativos[ativos.map((a)=>a.id).indexOf(compra.id_ativo)];
      if (ativoDaCompra.tipo===tipo){
        accumulator+=ativoDaCompra.valor*compra.qnt;
      }
  }
  return accumulator;
}
function __getData(ativos,ativosNaCarteira){
  const valores = [];
  valores.push(__getTotal(ativos,ativosNaCarteira,"Renda Fixa"));
  valores.push(__getTotal(ativos,ativosNaCarteira,"Ação"));
  valores.push(__getTotal(ativos,ativosNaCarteira,"Fundo Imobiliário"));
  valores.push(__getTotal(ativos,ativosNaCarteira,"Provento"));
  return valores;
}

export default function Application() {
  const carteiraAtual = useSelector(state=>state.carteiraAtual);
  const ativos = useSelector(state=>state.ativos);
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
  <div style={{width: 'auto',height:'25vh',marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'}}>
    <Doughnut data={data} updateMode='resize' redraw={false}/>
  </div>
  );
}
