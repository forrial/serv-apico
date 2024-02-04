const { app } = require('apico/server.js');

app.use(function( req, res, next){
    next();
});

const express = require('express');
const bodyParser = require('body-parser');


// middleware for form
app.use(bodyParser.urlencoded({ extended: true }));


// POST to serv
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // data to database

  res.send(`User ${username} was registrated!`);
});

