const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes=require('./routes/authRoutes');
dotenv.config();
const authMiddleware = require("./middleware/AuthMiddleware");
const resourceRoutes = require("./routes/resourceRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/resources", resourceRoutes);
app.use("/api/auth",authRoutes);
app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({ message: "Protected route accessed", user: req.user });
  });
// Test route
app.get("/", (req, res) => {
  res.send("Community Resource Platform API Running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});