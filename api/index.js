const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

mongoose.connect('mongodb+srv://booking:tonboswimmers%40gmail.com@airbnc.dyqmkoc.mongodb.net/?retryWrites=true&w=majority&appName=airbnc');

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  const {name,email,password} = req.body;
  User.create({
    name,
    email,
    password});  
})
app.listen(3000, () =>{
   console.log('Server listening on port 3000...')
  });