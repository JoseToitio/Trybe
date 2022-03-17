const express = require('express');
const bodyParser = require('body-parser');
const simpsons = require('./fs.js');
const rescue = require('express-rescue');
const app = express();
app.use(bodyParser.json());
app.get('/ping', (req, res) => {
  res.json({ "message": "pong"})
});
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({"message": `Hello, ${name}!`})
});
app.post('/greetings', (req, res) => {
  const {name, age} = req.body;
  if(parseInt(age, 10) <= 17) return res.status(401).json({message: "Unauthorized"});
  return res.status(200).json({message: `Hello, ${name}!`})
});
app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;
  res.status(200).json({"message": `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.get('/simpsons', rescue(async (req, res) => {
  const names = await simpsons.getSimpsonsFs();
  res.status(200).json(names);
}));
app.get('/simpsons/:id', rescue(async (req, res) => {
  const names = await simpsons.getSimpsonsFs();
  const filterSimpsons = names.find(({id}) => id === req.params.id);
  if(!filterSimpsons) return res.status(404).json({message: 'simpsons not found'});

  res.status(200).json(filterSimpsons);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const {id, name} = req.body;
  const names = await simpsons.getSimpsonsFs();
  if (names.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  names.push({id, name});
  await simpsons.setSimpsonsFs(names);
  res.status(204).end();
}));
app.listen(3001, () => console.log('porta 3001'));