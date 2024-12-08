import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const colors = [
  "rgba(75,192,192,1)",
  "rgb(153, 102, 255)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];

type Dataset = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
};

interface BarChartProps {
  labels: string[];
  datasets: Dataset[];
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
}

const BarChart: React.FC<BarChartProps> = ({
  labels,
  datasets,
  title,
  xAxisLabel,
  yAxisLabel,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const enhancedDatasets: Dataset[] = datasets.map(
    (dataset: Dataset, index: number) => ({
      ...dataset,
      backgroundColor: colors[index % colors.length],
      borderColor: colors[index % colors.length],
      borderWidth: 1,
      hoverBackgroundColor: "red",
      hoverBorderColor: "red",
    })
  );

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: enhancedDatasets,
        },
        options: {
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: title,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: xAxisLabel,
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: yAxisLabel,
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });
    }
  }, [labels]);

  return <canvas ref={chartRef} style={{ height: "300px", width: "300px" }} />;
};

export default BarChart;
