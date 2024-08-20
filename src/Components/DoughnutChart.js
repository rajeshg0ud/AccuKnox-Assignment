import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

 ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData }) => {
    return (
        <Doughnut
            data={chartData}
            options={{
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
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

export default DoughnutChart;
