const express = require('express');
const cors = require('cors');
const app = express();

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));
app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  const {name,email,password} = req.body;
  res.send({name,email,password}); //res.send
})
app.listen(3000, () =>{
   console.log('Server listening on port 3000...')
  });