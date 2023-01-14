const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sensor3', (req, res) => {
  res.send({sensor3: 1000});
});
//
app.listen(port, ()=>{
  console.log(`Server Berjalan di http://localhost:${port}`)
});
