

const mongoose = require('mongoose');


const Voters_info = new mongoose.Schema({
  first_n: String,
  last_n: String,
  zipcode: Number,
  history: [String]

});

Voters_info.index({first_n:1});
Voters_info.index({last_n:1});
Voters_info.index({zipcode:1});
Voters_info.index({history:1});


module.exports = mongoose.model('Voter', Voters_info);
