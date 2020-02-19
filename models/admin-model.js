const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 


const adminSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: {type: String, required: true } 
}); 

adminSchema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password); 
}; 

adminSchema.methods.IsValid  = ( hashedPassword ) => {
    return bcrypt.compareSync(hashedPassword, this.password); 
} 


const Admin = mongoose.model('Admin',adminSchema ); 

module.exports = Admin; 
 