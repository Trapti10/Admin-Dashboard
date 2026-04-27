import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { h2 } from "framer-motion/client";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ChartSection = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: [20000, 25000, 30000, 28000, 35000, 45000],
        borderColor: "#30333e",
        backgroundColor: "rgba(48, 51, 62, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#30333e",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: { color: "#30333e" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#30333e" },
        grid: { color: "#e5e5e5" },
      },
    },
  };

  return( 
    <div className="">
   <h2 className=" text-lg w-full font-semibold text-primary mb-4">Sales Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartSection;