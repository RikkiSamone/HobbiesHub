require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const hobbyRoutes = require("./routes/hobbyRoutes");
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/hobbies", hobbyRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));