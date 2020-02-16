const mongoose = require('mongoose'); 

const adsSchema = new mongoose.Schema({
    title: String, 
    description: String,
    file: Object
}); 

const Ads = mongoose.model('Ads',adsSchema ); 

module.exports = Ads; 
 