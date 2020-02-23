//define a plan for a collection

const mongoose = require('mongoose');

//schema for a collection of professors
const Voters_info = new mongoose.Schema({
  first_n: String,
  last_n: String,
  zipcode: Number,
  history: [String]

});
// speed up queries on all fields
Voters_info.index({first_n:1});
Voters_info.index({last_n:1});
Voters_info.index({zipcode:1});
Voters_info.index({history:1});

//compile and export this schema
module.exports = mongoose.model('Voter', Voters_info);
