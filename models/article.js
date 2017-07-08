const mongoose = require('mongoose');



//the tutorial has facebook and twitter as well but
//I think this is fine for now just having local

const articleSchema = mongoose.Schema({
  name : String,
  body : String
})

module.exports = mongoose.model('Article', articleSchema)
