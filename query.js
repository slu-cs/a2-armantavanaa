

const mongoose = require('mongoose');
const connect = require('./db');
const Voters_info = require('./schema');
connect();
const queries = [

  Voters_info.find().where('zipcode').equals('13617').countDocuments(),
  Voters_info.find().where('first_n').equals('STARR'),
  Voters_info.find().where('history').in('GE16'),
  Voters_info.find().sort('-n_last').limit(1),
  Voters_info.distinct('zipcode')

];



Promise.all(queries)
  .then(function(results) {
    console.log('voters in canton: ', results[0]);
    console.log('What are the full names of all the registered voters whose first-name is STARR? ', results[1].map(x=> x.first_n + " " + x.last_n));
    console.log('How many people voted in the 2016 general election (GE16)? ', results[2].length);
    console.log('What is the last-name that comes last in the county in alphabetical order? ', results[3]);
    console.log('How many zip codes does the county contain? ', results[4].length);

}).catch(error => console.error(error.stack));
