const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');

connect(); // To the database

const result = [];
file.on('line', function(line) {
  const columns = line.split(',');
  result.push(
    new Voters_info ({
    first_n: columns[0],
    last_n: columns[1],
    zipcode: Number(columns[2]),
    history: columns[3]});
  )
});

file.on('close', function(result){
  mongoose.connection.dropDatabase()
    .then(result => result.save())
    .then(() => mongoose.connection.close())
    .then(result => console.log("Ready"))
    .catch(error => console.error(error.stack));
});
