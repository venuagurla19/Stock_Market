const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 6000 });

wss.on('connection', ws => {
  console.log('Client connected');
  
  // Send a sample message every 3 seconds (simulating stock market updates)
  setInterval(() => {
    ws.send(JSON.stringify({ stock: 'AAPL', price: Math.random() * 1000 }));
  }, 3000);

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:6000');
