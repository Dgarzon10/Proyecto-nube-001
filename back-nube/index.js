const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors'); // Importa el paquete cors
const port = 3001
 
const app = express()

app.use(bodyParser.json());
app.use(cors()); // Habilita CORS
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/', (req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})
 
 
app.listen(port, () => {
  console.log('$Example app listening on port {} ')
})
