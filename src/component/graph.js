import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './css/graph.css'; // Import your CSS file for styling

const SalesChart = ({ data }) => {
  return (
    <div className="chart-container">
      <LineChart width={600} height={400} data={data[0].data} className="recharts-wrapper">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip contentStyle={{ color: "#333" }} labelStyle={{ fontWeight: "bold" }} className="recharts-tooltip" />
        <Legend className="recharts-legend-wrapper" />
        {data.map((item, index) => (
          <Line
            key={index}
            dataKey="value"
            data={item.data}
            name={item.title}
            stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} // Generate random color
          />
        ))}
      </LineChart>
    </div>
  );
};

export default SalesChart;
