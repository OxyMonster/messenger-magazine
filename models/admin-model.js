const mongoose = require('mongoose'); 

const adminSchema = new mongoose.Schema({
    userName: String,
    password: String
}); 


const Admin = mongoose.model('Admin',adminSchema ); 

module.exports = Admin; 
 