import { Chart } from 'chart.js/auto';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React, { useEffect, useRef, PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getStoredDonations } from '../Utility/LocalStorage';

const StatisticsPage = () => {


    const totalDonations = useLoaderData();
    const chartRef = useRef(null);
    const StoredDonationIds = getStoredDonations();

    const total = totalDonations.length + StoredDonationIds.length;

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }



        const ctx = document.getElementById('myPieChart').getContext('2d');



        const newChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [

                    `Your Donations (${((StoredDonationIds.length / total) * 100).toFixed(2)}%)`,
                    `Total Donations (${((totalDonations.length / total) * 100).toFixed(2)}%)`,
                ],
                datasets: [
                    {
                        data: [StoredDonationIds.length, totalDonations.length],
                        backgroundColor: ['#00C49F', '#FF444A'],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        });

        chartRef.current = newChart;
    }, [totalDonations, StoredDonationIds]);







    return (


        <div className="h-2/6 w-2/6 max-w-7xl mx-auto py-5 mt-14 md:mt-8 scale-150 md:scale-100 ">
            <canvas id="myPieChart" width="400" height="400">

            </canvas>

        </div>




    );
};

export default StatisticsPage;
