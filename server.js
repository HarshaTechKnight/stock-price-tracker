// server.js

const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Function to generate random stock prices
function getRandomStockPrice() {
    return Math.random() * 1000;
}

// Simulate real-time stock price updates
setInterval(() => {
    const stocks = [
        { symbol: 'AAPL', price: getRandomStockPrice() },
        { symbol: 'GOOGL', price: getRandomStockPrice() },
        { symbol: 'AMZN', price: getRandomStockPrice() }
    ];

    // Send updated stock prices to all connected clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            stocks.forEach(stock => {
                client.send(JSON.stringify(stock));
            });
        }
    });
}, 1000); // Update every second

console.log('WebSocket server is running on ws://localhost:8080');