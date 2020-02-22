

const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');

connect(); // To the database

const queries = [
  Voters_info.find()

  Voters_info.find().where('zipcode').equals('13617')
];


// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('voters? ', results[0].map(p => p.first_n));
}).catch(error => console.error(error.stack));
