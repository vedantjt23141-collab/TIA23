const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let users = []; // store data in memory

// POST API (AJAX)
app.post("/register", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "User registered successfully!" });
});

// GET API
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});