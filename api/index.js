const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));
console.log(process.env.MONGOD_URI);
mongoose.connect();
app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  const {name,email,password} = req.body;
  res.json({name,email,password});  
})
app.listen(3000, () =>{
   console.log('Server listening on port 3000...')
  });