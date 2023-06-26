import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default (props) => {
  const carteiras = useSelector((state)=>state.carteiras);
  const ativos = useSelector((state)=>state.ativos);
  const date = new Date();
  const mesAtual = date.getMonth()+1;
  const anoAtual = date.getFullYear();
  const chartRef = useRef(null);
  useEffect(()=>{
    const chart = chartRef.current;
    //if(chart)console.log(chart.canvas);
  },[])

  function __getData(carteiraSelecionada){
    let ativosNaCarteira = carteiras[carteiras.map((c)=>c.id).indexOf(+carteiraSelecionada)].ativos.map((compra)=>{return {...compra,...ativos[ativos.map((a)=>a.id).indexOf(compra.id_ativo)]}});
    ativosNaCarteira=ativosNaCarteira.filter((a)=>a.ano===anoAtual);
    let meses=[];
    for(let mes = 1; mes <= mesAtual; mes++){
      let filtradoPorMes = ativosNaCarteira.filter((a)=>a.mes<=mes);
      
      if(filtradoPorMes.length>0)
        meses.push(filtradoPorMes.map((x)=>x.qnt*x.valor).reduce((x,y)=>x+y));
      else
        meses.push(0);
    }
    return meses;
  }
 const options = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: true,
      text: 'Relatório de crescimento mensal',
      color:"white",
      font:{
        size:24,
        weight:"bold",
        family:"Arial",
      }
    },
  },
};

const labels = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Valores',
      data: __getData(props.carteiraSelecionada),
      backgroundColor: 'rgba(255, 99, 0, 1)',
    },
  ],
};


  return (
    <div style={{width:"80%",height:"50vh",paddingBottom:15}}>
      <br/>
      <Bar ref={chartRef} options={options} data={data} updateMode='resize' redraw={false}/>
    </div>
  )
}
