const mongoose = require('mongoose'); 

const economySchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: String,
    file: Object
}); 

const Economy = mongoose.model('Economy',economySchema ); 

module.exports = Economy; 
 