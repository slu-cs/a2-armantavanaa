

const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');

connect(); // To the database

const queries = [

  Voters_info.find().where('zipcode').equals('13617').countDocuments()
];


// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('voters in canton: ', results[0]);
}).catch(error => console.error(error.stack));
