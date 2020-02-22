

const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');

connect(); // To the database

const queries = [
  Voters_info.find();
];


// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('voters? ', results[0].map(p => p.first));
}).catch(error => console.error(error.stack));
