const express = require ('express');
const app = express();
const port = 3000;

app.use("/api/user/", require("./routes/userRoutes"));

app.get('/', (req, res) => {
  res.send('Hello World.!');
});

app.get('/auth/login', (req, res) => {
  res.send({'message': 'Login successful'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});