import React, { useEffect } from "react";
import Plot from "react-plotly.js";

function Chart({ data }) {
  const { x, y, name } = data;

  return (
    <div>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
            name: name,
          },
        ]}
        layout={{
          title: "Market Data Chart",
          xaxis: { title: "Time" },
          yaxis: { title: "Price" },
        }}
      />
    </div>
  );
}

export default Chart;
