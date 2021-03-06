const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});
const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');

connect();

const result = [];
file.on('line', function(line) {
  const columns = line.split(',');
  result.push(
    new Voters_info ({
    first_n: columns[0],
    last_n: columns[1],
    zipcode: columns[2],
    history: columns.slice(3)})
  )
});

file.on('close', function(line){
  mongoose.connection.dropDatabase()
    .then(()=> Promise.all(result.map(x=>x.save())))
    .then(() => mongoose.connection.close())
    .then(result => console.log("Ready"))
    .catch(error => console.error(error.stack));
  });
