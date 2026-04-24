const express = require("express");
const app = express();
const PORT = 7700;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint - returns a welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my simple API!" });
});

app.get("/home", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Node.js App on Linode</title>
        <style>
            body { font-family: Arial; text-align: center; padding: 50px; }
            h1 { color: #4CAF50; }
            .time { color: #666; margin-top: 20px; }
        </style>
    </head>
    <body>
        <h1>✅ Node.js App Deployed Successfully!</h1>
        <p>Deployed via Jenkins Pipeline to Linode VPS</p>
        <p>Server Time: <span class="time">${new Date().toLocaleString()}</span><Awesome/p>
        <p>Container: ${process.env.HOSTNAME || "Unknown"}</p>
    </body>
    </html>
  `);
});

// GET endpoint - returns a list of users
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];
  res.json(users);
});

// POST endpoint - creates a new user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newUser = {
    id: Date.now(),
    name: name,
  };

  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
