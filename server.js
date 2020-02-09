const mongoose= require('mongoose'); 


const dbURI = process.env.MONGO_DB_URL;
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
  
  
