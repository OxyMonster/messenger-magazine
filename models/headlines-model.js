const mongoose = require('mongoose'); 

const headlinesSchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: Date,
    file: Object
}); 

const Headlines = mongoose.model('Headlines',headlinesSchema ); 

module.exports = Headlines; 
 