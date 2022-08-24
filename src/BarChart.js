import React from "react"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function BarChart({chartData}) {
    return (
        <Bar 
        data={chartData}
        
        options={{
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        drawBorder: false,
                        display: false
                    }
                },
                y: {
                    grid: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
            }
        }}
        />
        )
}