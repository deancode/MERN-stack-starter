const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const HelloSchema = require('./server/model/HelloModel.js')

const app = express();

mongoose.connect('mongodb://localhost/umber', (err) => {
  if (err) console.error(err);
  console.log("connected to mongo!");
});

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/hello', (req, res) => {
  HelloSchema.create({
    title: "Hello World",
    isCool: true,
    age: 25,
  })
    .then(data => res.json(data))
    .catch(err => res.end(err));
});


const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.error(err);
  console.log("listening on 3000;")
});