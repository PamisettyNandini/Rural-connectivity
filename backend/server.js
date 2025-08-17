// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully! 🚀");
});

// Contact form data ni handle cheyyadaniki
app.post("/contact", (req, res) => {
  console.log("Form data received:", req.body);
  res.json({ message: "Form submitted successfully ✅" });
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});