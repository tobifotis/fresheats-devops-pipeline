const express = require("express");
const path = require("path");

const app = express();

// Port config: use env var if provided, else 3000
const PORT = process.env.PORT || 3000;

// App version (later you can override with env var in CI/CD)
const APP_VERSION = process.env.APP_VERSION || "v1.0";

// Example menu data (API will return this)
const menuItems = [
  { id: 1, name: "Frietjes met Frikandel", price: 9.99 },
  { id: 2, name: "Shredded Chicken Quessadilla", price: 8.49 },
  { id: 3, name: "Double-Double", price: 7.25 },
  { id: 4, name: "Spicy Chicken Sandwich", price: 5.45 }
];

// Serve the static frontend from /public
app.use(express.static(path.join(__dirname, "public")));

// API endpoint: /api/menu
app.get("/api/menu", (req, res) => {
  res.json(menuItems);
});

// Health endpoint: /health
app.get("/health", (req, res) => {
  res.status(200).send({"status": "healthy"});
});

// Version endpoint: /version
app.get("/version", (req, res) => {
  res.json({ version: APP_VERSION });
});

// Start server
app.listen(PORT, () => {
  console.log(`Food Menu Service running on port ${PORT}`);
});
