const mongoose= require('mongoose'); 

const dbURI = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
mongoose.connect( dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  }, { useUnifiedTopology: true });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  }, { useUnifiedTopology: true });


  module.exports = mongoose; 
  
  
