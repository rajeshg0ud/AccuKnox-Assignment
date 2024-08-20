import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Barr = ({ chartData }) => {
    return (
        <Bar
            data={chartData} 
            className='max-h-44' 
            options={{
                indexAxis: 'y',  
                scales: {
                    x: {
                        stacked: true, 
                        display: false,  
                        title: {
                            display: false,
                            text: 'Percentage',  
                        },
                    },
                    y: {
                        stacked: true,  
                        display: false,  
                        title: {
                            display: false,
                            text: 'Products',  
                        },
                    },
                }, 
                plugins: { 
                    legend: { 
                        position: 'right'  
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}%`;  
                            },
                        },
                    },
                },
            }}
        />
    );
};

export default Barr;
