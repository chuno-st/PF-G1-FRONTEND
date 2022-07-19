import { useEffect, useMemo, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const response = [
    {
        categoria: "Piedras preciosas",
        importeTotal: 18000,
    },
    {
        categoria: "Joyas",
        importeTotal: 12000,
    },
    {
        categoria: "Otros",
        importeTotal: 7000,
    }
]

const options = {
    fill: true,
    responsive: true,
    scales: {
        y: {
            min: 0,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export default function CategoriaBarChart() {
    // const [chartData, setChartData] = useState({scores:[], labels: []})
    
    // useEffect(()=>{
    //     // Hacer llamado a la API y guardar el resultado en response
    //     setChartData({scores:response.map((el) => el.importeTotal), labels: response.map((el) => el.categoria)})
    // }, []);
    const responseLabels = response.map((el) => el.categoria);
    const responseScores = response.map((el) => el.importeTotal);

    
    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Mis datos",
                    // data: chartData.scores,
                    data: responseScores,
                    borderColor: "rgb (75, 192, 192)",
                    pointRadius: 6,
                    pointBackgroundColor: "rgb(75, 192, 192)",
                    pointBackgroundColor: "rgb(75, 192, 192, 0.3)",
                },
            ],
            // labels: chartData.labels,
            labels: responseLabels,
        };
    }, []);

    return (
        <div style={{"width":"40%"}}>
            <Bar data={data} options={options} />
        </div>
    );
}
