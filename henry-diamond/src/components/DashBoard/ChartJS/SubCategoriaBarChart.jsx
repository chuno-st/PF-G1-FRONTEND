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
        subCategoria: "Dijes",
        importeTotal: 18000,
    },
    {
        subCategoria: "Anillos",
        importeTotal: 12000,
    },
    {
        subCategoria: "Pulseras",
        importeTotal: 2800,
    },
    {
        subCategoria: "Pendulo",
        importeTotal: 8500,
    },
    {
        subCategoria: "Llaveros",
        importeTotal: 8000,
    },
    {
        subCategoria: "Aros",
        importeTotal: 12000,
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

export default function SubCategoriaBarChart() {
    // const [chartData, setChartData] = useState({scores:[], labels: []})
    const responseScores = response.map((el) => el.importeTotal);
    const responseLabels = response.map((el) => el.subCategoria);
    // useEffect(()=>{
    // Hacer llamado a la API y guardar el resultado en response
    // setChartData({scores:response?.map((el) => el.importeTotal), labels: response?.map((el) => el.subCategoria)})
    // }, []);

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
            labels: responseLabels
        };
    }, []);

    return (
        <div style={{"width":"40%"}}>
            <Bar data={data} options={options} />
        </div>
    );
}