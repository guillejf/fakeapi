const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.json([
    { id: 100, name: "pelota", category: "futbol" },
    { id: 101, name: "pelota 3 ", category: "futbol" },
    { id: 102, name: "pelota 44", category: "futbol" },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
