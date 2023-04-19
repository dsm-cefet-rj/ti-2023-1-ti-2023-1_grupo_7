"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 30, 50, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 20, 1)',
        'rgba(75, 192, 75, 1)',
        'rgba(130, 30, 245, 1)',
        'rgba(255, 128, 0, 1)',
      ],
      borderColor: [
        'rgba(255, 30, 50, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 20, 1)',
        'rgba(75, 192, 75, 1)',
        'rgba(130, 30, 245, 1)',
        'rgba(255, 128, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Aplication() {
  return( 
  <div style={{width: 300,marginTop:50,marginBottom:50 }}>
    <Doughnut data={data} style={{display: "flow"}}/>
  </div>
  );
}
