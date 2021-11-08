const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello CYF");
});

app.get("/two", (req, res) => {
    res.send("Another route");
});

app.get("/numbers", (req, res) => {
  const someData = [1, 2, 3];  
  res.json(someData);
});

app.listen(PORT, ()=> {
    console.log(`The server is listening at PORT ${PORT}`);
});