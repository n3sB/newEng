import React, { useEffect, useState } from "react";
import { fetchMarketData, fetchPositions } from "../api";

function Dashboard() {
  const [marketData, setMarketData] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const marketResponse = await fetchMarketData();
      const positionsResponse = await fetchPositions();
      setMarketData(marketResponse.data);
      setPositions(positionsResponse.data);
    };
    loadData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Market Data</h2>
      <ul>
        {Object.entries(marketData).map(([symbol, price]) => (
          <li key={symbol}>
            {symbol}: ${parseFloat(price).toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Active Positions</h2>
      <ul>
        {positions.map((position, index) => (
          <li key={index}>
            {position.symbol} - Entry: {position.entryPrice} - P&L:{" "}
            {position.pnl}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
