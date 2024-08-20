import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Barr from './Bar';
import AddWidget from './AddWidget';  

 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [formDetails, setFormDetails] = useState({ name: '', data: '' });
    const [hasError, setHasError] = useState(false);
    const [chartsData, setChartsData] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);

    useEffect(() => {
        loadGraphData();
    }, []);

    const loadGraphData = () => {
        const data = [
            {
                id: 1,
                section: 'CSPM Executive Dashboard',
                title: "Cloud Accounts",
                chartData: {
                    datasets: [
                        {
                            label: 'Cloud Accounts',
                            data: [2, 2],
                            backgroundColor: ['#D2E0FF', '#324AB2'],
                            hoverOffset: 4
                        },
                    ],
                    labels: ['Connected', 'Not Connected'],
                }
            },
            {
                id: 2,
                section: 'CSPM Executive Dashboard',
                title: "Cloud Account Risk Assessment",
                chartData: {
                    labels: ['Failed', 'Warning', 'Not available', 'Passed'],
                    datasets: [
                        {
                            label: 'Cloud Account Risk Assessment',
                            data: [1689, 681, 36, 7253],
                            backgroundColor: ['#aa0809', '#FFCE56', '#4BC0C0', '#00A559'],
                            hoverOffset: 4
                        },
                    ],
                }
            },
            {
                id: 3,
                section: 'CWPP Dashboard',
                title: "Top 5 Namespace Specific Alerts",
                chartData: {
                    labels: [], 
                    datasets: [],
                }
            },
            {
                id: 4,
                section: 'CWPP Dashboard',
                title: "Workload Alerts",
                chartData: {
                    labels: [], 
                    datasets: [],
                }
            },
            {
                id: 5,
                section: 'Registry Scan',
                title: "Image Risk Assessment",
                chartData: {
                    labels: ['Critical', 'High', 'Medium', 'Low'],
                    datasets: [
                        {
                            label: 'Image Risk Assessment',
                            data: [9, 150, 1200, 111],
                            backgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0', '#36A2EB'],
                            hoverOffset: 4
                        },
                    ],
                }
            },
            {
                id: 6,
                section: 'Registry Scan',
                title: "Image Security Issues",
                chartData: {
                    labels: ['Critical', 'High', 'Medium', 'Low'],
                    datasets: [
                        {
                            label: 'Image Security Issues',
                            data: [2, 2, 0, 0],
                            backgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0', '#36A2EB'],
                            hoverOffset: 4
                        },
                    ],
                }
            },
        ];
        setChartsData(data);
    };

    const openSidebar = (section) => {
        setSelectedSection(section);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setHasError(false);
    };

    const handleSave = () => {
        if (formDetails.name === '' || formDetails.data === '') {
            setHasError(true);
        } else {
            const newWidget = {
                id: chartsData.length + 1,
                section: selectedSection,
                title: formDetails.name,
                chartData: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: formDetails.name,
                            data: formDetails.data.split(',').map(Number),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                            hoverOffset: 4
                        },
                    ],
                }
            };
            setChartsData([...chartsData, newWidget]);
            closeSidebar();
        }
    };

    const handleInputChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

     const getChartsBySection = (section) => chartsData.filter(chart => chart.section === section);

    return (
        <div className="p-8 bg-slate-200">
            <h1 className="text-2xl font-bold mb-6">CNAPP Dashboard</h1>
            
            {/* CSPM Executive Section */}
            <h2 className="text-xl font-bold mb-4">CSPM Executive Dashboard</h2>
            <div className="mb-6 flex">
                <div className="grid grid-cols-2 gap-4 min-w-[66%]"> {/* Adjusted gap */}
                    {getChartsBySection('CSPM Executive Dashboard').map((chart) => (
                        <div key={chart.id} className="bg-white p-4 rounded-lg flex flex-col items-center justify-center">
                            <h2 className="text-lg font-bold mb-4 self-start">{chart.title}</h2>
                            <Doughnut 
                                data={chart.chartData} 
                                options={{
                                    plugins: {
                                        legend: {
                                            position: 'right',  
                                        },
                                    }, 
                                    rotation: Math.PI,  
                                }} 
                                className='max-h-56'  
                            />
                        </div>
                    ))}
                </div>
                <div className='bg-white mx-2 rounded-lg min-w-[33%] flex justify-center items-center'>
                    <button
                        onClick={() => openSidebar('CSPM Executive Dashboard')}
                        className="text-sm px-4 py-1 h-10 border-2 text-gray-400 rounded-lg hover:bg-gray-100"
                    >
                        + Add Widget
                    </button>
                </div>
            </div>

            {/* CWPP Section */}
            <h2 className="text-xl font-bold mb-4">CWPP Dashboard</h2>
            <div className="mb-6 flex">
                <div className="grid grid-cols-2 gap-4 min-w-[66%]">  
                    {getChartsBySection('CWPP Dashboard').map((chart) => (
                        <div key={chart.id} className="bg-white p-4 rounded-lg flex flex-col items-center justify-center">
                            <h2 className="text-lg font-bold mb-4  self-start">{chart.title}</h2>
                            {chart.chartData.labels.length > 0 ? (
                                <Doughnut 
                                    data={chart.chartData} 
                                    options={{ 
                                        plugins: { 
                                            legend: { 
                                                position: 'right' 
                                            }, 
                                        },
                                        rotation: Math.PI, 
                                        circumference: Math.PI * 2 
                                    }} 
                                    className='max-h-56' 
                                />
                            ) : (
                                <div className='flex flex-col justify-center items-center min-h-52 max-h-56'>
                                    <img src='https://media.istockphoto.com/id/1225609127/vector/growing-business-concept.jpg?s=612x612&w=0&k=20&c=RWDV5WgdK55I-9KB9xWBWs770pWE3qCGK34ZCvB1uG8=' className='w-12' alt="No data" />
                                    <p className="text-gray-800 font-medium">No Graph data available!</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='bg-white mx-2 rounded-lg min-w-[33%] flex justify-center items-center'>
                    <button
                        onClick={() => openSidebar('CWPP Dashboard')}
                        className="text-sm px-4 py-1 h-10 border-2 text-gray-400 rounded-lg hover:bg-gray-100"
                    >
                        + Add Widget
                    </button>
                </div>
            </div>


            {/* Registr Section */}
            <h2 className="text-xl font-bold mb-4">Registry Scan</h2>
            <div className="mb-2 flex">
                <div className="grid grid-cols-2 gap-4 min-w-[66%]">  
                    {getChartsBySection('Registry Scan').map((chart) => (
                        <div key={chart.id} className="bg-white p-6 rounded-lg flex flex-col items-center justify-center">
                            <h2 className="text-lg font-bold mb-4  self-start">{chart.title}</h2>
                            <Barr chartData={chart.chartData} className='max-h-44' />
                        </div>
                    ))}
                </div>
                <div className='bg-white mx-2 rounded-lg min-w-[33%] flex justify-center items-center'>
                    <button
                        onClick={() => openSidebar('Registry Scan')}
                        className="text-sm px-4 py-1 h-10 border-2 text-gray-400 rounded-lg hover:bg-gray-100"
                    >
                        + Add Widget
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <AddWidget
                    closeSidebar={closeSidebar}
                    handleSave={handleSave}
                    handleInputChange={handleInputChange}
                    formDetails={formDetails}
                    hasError={hasError}
                />
            )}
        </div>
    );
};

export default Dashboard;
