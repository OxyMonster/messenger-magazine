const mongoose = require('mongoose'); 

const newsSchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: String,
    // file: ''
}); 

const News = mongoose.model('News',newsSchema ); 

module.exports = News; 
 