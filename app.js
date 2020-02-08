const express = require('express'); 
const app = express(); 

const path = require('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  


// * * * Routes * * *
const uploadRoutes = require('./routes/file-uploads');
const newsRoute = require('./routes/news');
const headlinesRoute = require('./routes/headlines');


app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser());



app.use(uploadRoutes);
app.use(newsRoute); 
app.use(headlinesRoute); 


// * * * Connect to mongoDB * * * 
const mongoDB = require('./server'); 



  

if ( process.env.NODE_ENV === 'production' ) {

    app.use(express.static('client/dist/browser')); 
    app.get('*',  (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'browser', 'index.html')); 
    }); 
}; 


// * * * Server * * *
app.listen( process.env.PORT || 8080 , () => {
    console.log("listening to port: 3000");
        
    
});
