const express = require("express");

const app = express();

const connectDB = require("./config/db");


// DATABASE CONNECTION
connectDB();


// MIDDLEWARE
app.use(express.json());


// ROUTES
app.use("/api/users", require("./routes/userRoutes"));


// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Node.js CRUD API Running");
});


// SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});