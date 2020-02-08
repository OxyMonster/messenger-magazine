const mongoose= require('mongoose'); 

const dbURI = 'mongodb+srv://Admin:753951@themessenger-vgbkp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect( dbURI, { useNewUrlParser: true,  useUnifiedTopology: true  });

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
  
  
