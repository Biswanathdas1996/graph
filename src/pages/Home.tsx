import React from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PirChart from "../components/PirChart";
import RadarChart from "../components/RadarChart";

const Home: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: "Dataset 2",
        data: [100, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  return (
    <div>
      <h1 style={{ gridColumn: "span 4" }}>Welcome to the Home Page</h1>
      <p style={{ gridColumn: "span 4", display: "grid" }}>
        This is a sample page created with React and TypeScript. This is a
        sample page created with React and TypeScript.
      </p>
      <div style={{ display: "flex", gridColumn: "span 4" }}>
        <div
          style={{
            flex: 1,
            padding: "10px",
            margin: 10,
            border: "1px solid black",
          }}
        >
          <LineChart
            labels={data.labels}
            datasets={data.datasets}
            title="Sample Line Chart"
            xAxisLabel="Months"
            yAxisLabel="Values"
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            margin: 10,
            border: "1px solid black",
          }}
        >
          <BarChart
            labels={data.labels}
            datasets={data.datasets}
            title="Sample Line Chart"
            xAxisLabel="Months"
            yAxisLabel="Values"
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            margin: 10,
            border: "1px solid black",
          }}
        >
          <PirChart
            labels={data.labels}
            datasets={data.datasets}
            title="Sample Pie Chart"
            // xAxisLabel="Months"
            // yAxisLabel="Values"
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            margin: 10,
            border: "1px solid black",
          }}
        >
          <RadarChart
            labels={data.labels}
            datasets={data.datasets}
            title="Sample Pie Chart"
            // xAxisLabel="Months"
            // yAxisLabel="Values"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
