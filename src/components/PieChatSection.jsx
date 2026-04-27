import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartSection = () => {
  const data = {
    labels: ["Electronics", "Clothing", "Accessories", "Others"],
    datasets: [
      {
        data: [95000, 60000, 45000, 45000],
        backgroundColor: [
          "#30333e",  // primary
          "#3a3c44",  // secondary
          "#44a83e",  // accent
          "#000000",  // dark
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-primary mb-4">
        Sales by Category
      </h2>

      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartSection;