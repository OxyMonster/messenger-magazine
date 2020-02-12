const mongoose = require('mongoose'); 

const politicsSchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: String,
    file: Object
}); 

const Politics = mongoose.model('Poltics',politicsSchema ); 

module.exports = Politics; 
 