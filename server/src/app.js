const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const serviceRequestRoutes = require("./routes/serviceRequestRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/requests", serviceRequestRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Panoply API is running"
    });
});

module.exports = app; 