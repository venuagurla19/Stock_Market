import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // State to hold stock data and IPO data
  const [stocks, setStocks] = useState([]);
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch stock data and IPO data
  useEffect(() => {
    // Fetching stock market data (replace with real API URL)
    fetch('https://api.example.com/stocks')  // Replace with actual stock market API
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching stock data:', error));

    // Fetching IPO data (replace with real API URL)
    fetch('https://api.example.com/ipos')  // Replace with actual IPO API
      .then((response) => response.json())
      .then((data) => {
        setIpos(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching IPO data:', error));
  }, []);

  // Render loading state or stock data
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app-container">
      <header>
        <h1>Stock Market & IPO Tracker</h1>
      </header>

      {/* Stock Data Section */}
      <section className="stock-section">
        <h2>Current Stocks</h2>
        <div className="stock-list">
          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <div key={stock.id} className="stock-card">
                <h3>{stock.name}</h3>
                <p>Price: ${stock.price}</p>
                <p>Change: {stock.change}%</p>
              </div>
            ))
          ) : (
            <p>No stocks available.</p>
          )}
        </div>
      </section>

      {/* IPO Data Section */}
      <section className="ipo-section">
        <h2>Upcoming IPOs</h2>
        <div className="ipo-list">
          {ipos.length > 0 ? (
            ipos.map((ipo) => (
              <div key={ipo.id} className="ipo-card">
                <h3>{ipo.name}</h3>
                <p>Price: ${ipo.price}</p>
                <p>Launch Date: {ipo.launchDate}</p>
              </div>
            ))
          ) : (
            <p>No upcoming IPOs.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
