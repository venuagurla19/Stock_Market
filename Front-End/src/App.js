import React, { useState } from 'react';
import './App.css';

function App() {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);

  const fetchStockData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/stock/${stockSymbol}`);
      if (!response.ok) throw new Error('Stock data not found');
      const data = await response.json();
      setStockData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStockData(null);
    }
  };

  return (
    <div className="App">
      <h1>Stock Market Tracker</h1>
      <input
        type="text"
        placeholder="Enter stock symbol"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
      />
      <button onClick={fetchStockData}>Get Stock Data</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {stockData && (
        <div>
          <h2>{stockSymbol.toUpperCase()}</h2>
          <p>Current Price: {stockData.current_price}</p>
          <p>High Price: {stockData.high_price}</p>
          <p>Low Price: {stockData.low_price}</p>
          <p>Open Price: {stockData.open_price}</p>
          <p>Previous Close: {stockData.previous_close}</p>
        </div>
      )}
    </div>
  );
}

export default App;
