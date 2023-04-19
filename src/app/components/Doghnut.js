"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Renda Fixa', 'Ações', 'Fundos Imobiliários', 'Proventos'],
  datasets: [
    {
      label: 'Valor',
      data: [1200, 1907, 304, 567],
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

export default function Aplication() {
  const size = 300;
  return( 
  <div style={{width: 'auto',marginBottom: 20, marginLeft: 'auto', marginRight: 'auto'}}>
    <Doughnut data={data} updateMode='resize' redraw={true}/>
  </div>
  );
}
