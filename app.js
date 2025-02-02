// app.js

// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:8080');

// Handle incoming messages from the WebSocket server
socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    updateStockPrice(data.symbol, data.price);
};

// Function to update the stock price on the UI
function updateStockPrice(symbol, price) {
    const stockElements = document.querySelectorAll('.stock');
    stockElements.forEach(stockElement => {
        const stockSymbol = stockElement.querySelector('.stock-symbol').textContent;
        if (stockSymbol === symbol) {
            stockElement.querySelector('.stock-price').textContent = `$${price.toFixed(2)}`;
        }
    });
}

// Handle errors
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Handle connection close
socket.onclose = function() {
    console.log('WebSocket connection closed');
};