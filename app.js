const express = require('express'); 
const app = express(); 

const path = require('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  

console.log("=============================================================================================   1");


app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser());

console.log("=============================================================================================   2");

// * * * Routes * * *
const uploadRoutes = require('./routes/file-uploads');
const newsRoute = require('./routes/news');
const headlinesRoute = require('./routes/headlines');

console.log("=============================================================================================   3");




app.use(uploadRoutes);
app.use(newsRoute); 
app.use(headlinesRoute); 


// * * * Connect to mongoDB * * * 
const mongoDB = require('./server'); 

console.log("=============================================================================================   4");

app.use( express.static('client/dist/browser') ); 
app.get( '*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'browser', 'index.html')); 
}); 



// * * * Server * * *
const port  = process.env.PORT || 8080

app.listen( port , () => {

    console.log(`Listening to port: ${port}`);
    
});
