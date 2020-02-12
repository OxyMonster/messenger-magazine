const mongoose = require('mongoose'); 

const cultureSchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: Date,
    file: Object
}); 

const Culture = mongoose.model('Culture',cultureSchema ); 

module.exports = Culture; 
 