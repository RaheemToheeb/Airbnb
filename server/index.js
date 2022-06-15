const express = require("express");
const app = express();
require("./Utils/Database");
app.use(express.json());
const signinRoute = require("./Router/sigUpRouter");
const port = 1555;

app.use("/api", signinRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Airbnb" });
});

app.listen(port, () => {
  console.log(`I am active on ${port}`);
});
