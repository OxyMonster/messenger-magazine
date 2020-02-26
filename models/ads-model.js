const mongoose = require('mongoose'); 

const adsSchema = new mongoose.Schema({
    linkPath: String,
    file: Object
}); 

const Ads = mongoose.model('Ads',adsSchema ); 

module.exports = Ads; 
   