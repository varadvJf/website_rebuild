const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "Sorry, I didn't understand.";

  if (msg.includes("hello")) reply = "Hello from server!";
  if (msg.includes("services")) reply = "We offer AI + Web services";
  if (msg.includes("contact")) reply = "Contact us at support@example.com";

  res.json({ reply });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});