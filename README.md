Real-time Stock Price Tracking App

This is a simple real-time stock price tracking application built using HTML, CSS, JavaScript, and WebSockets. The app displays real-time stock prices for a few selected stocks (e.g., AAPL, GOOGL, AMZN) and updates the prices dynamically using a WebSocket connection.

---

Features

- Real-time Updates: Stock prices are updated in real-time using WebSockets.
- Simple UI: Clean and intuitive user interface built with HTML and CSS.
- Customizable: Easily add or remove stocks from the list.
- Simulated Data: The backend generates random stock prices for demonstration purposes.

---

Technologies Used

- Frontend:
  - HTML
  - CSS
  - JavaScript
- Backend:
  - Node.js
  - WebSocket (`ws` library)
- Development Tools:
  - Visual Studio Code (or any code editor)
  - npm (Node Package Manager)

---

Prerequisites

Before running the application, ensure you have the following installed:

1. Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. npm: npm is included with Node.js. Verify installation by running:
   ```bash
   node -v
   npm -v
   ```

---

Setup Instructions

1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/real-time-stock-price-tracker.git
cd real-time-stock-price-tracker
```

2. Install Dependencies
Install the required dependencies for the WebSocket server:
```bash
npm install
```

3. Start the WebSocket Server
Run the WebSocket server using Node.js:
```bash
node server.js
```
The server will start on `ws://localhost:8080`.

4. Open the Frontend
Open the `index.html` file in your browser. You can use a live server extension in VS Code or simply open the file directly.

5. View Real-time Updates
The app will display real-time stock prices for the selected stocks (AAPL, GOOGL, AMZN). Prices will update every second.

---

Project Structure

```
real-time-stock-price-tracker/
│
├── index.html          Main HTML file for the frontend
├── styles.css          CSS file for styling the app
├── app.js              JavaScript file for WebSocket client logic
├── server.js           Node.js WebSocket server
├── README.md           Project documentation
└── package.json        npm configuration file
```

---

Customization

Add More Stocks
To add more stocks, update the following files:

1. HTML:
   Add a new stock element in `index.html`:
   ```html
   <div class="stock">
       <span class="stock-symbol">TSLA</span>
       <span class="stock-price">$0.00</span>
   </div>
   ```

2. Server:
   Add the stock symbol to the `stocks` array in `server.js`:
   ```javascript
   const stocks = [
       { symbol: 'AAPL', price: getRandomStockPrice() },
       { symbol: 'GOOGL', price: getRandomStockPrice() },
       { symbol: 'AMZN', price: getRandomStockPrice() },
       { symbol: 'TSLA', price: getRandomStockPrice() } // New stock
   ];
   ```

---

Future Enhancements

- Integrate a real stock market API (e.g., Alpha Vantage, IEX Cloud) for live data.
- Add charts to visualize stock price trends over time.
- Implement user authentication to track personalized stock portfolios.
- Add support for mobile devices with responsive design.

---

License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Acknowledgments

- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) for real-time communication.
- [ws library](https://www.npmjs.com/package/ws) for WebSocket server implementation.

---

Contact

For questions or feedback, feel free to reach out:

- M. Sri Harsha  
- Email: sriharsha0413@gmail.com  
- GitHub: [HarshaTechKnight](https://github.com/HarshaTechKnight)

---

Enjoy tracking stock prices in real-time! 🚀
