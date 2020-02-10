const express = require('express'); 
const app = express(); 

const path = require('path'); 
const cors = require('cors');
const bodyParser = require('body-parser');  
require('dotenv').config(); 



const port  = process.env.PORT || 8081; 


app.use(cors()); 
app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json()) 



// * * * Routes * * *
const uploadRoutes = require('./routes/file-uploads');
const newsRoute = require('./routes/news');
const headlinesRoute = require('./routes/headlines');
const adminRoute = require('./routes/admin'); 



app.use(uploadRoutes);
app.use(newsRoute); 
app.use(headlinesRoute); 
app.use(adminRoute); 


app.use( express.static('client/dist/browser') ); 
app.get( '*',  (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'browser', 'index.html')); 
}); 


// * * * Connect to mongoDB * * * 
 const mongoDB = require('./server'); 



// * * * Server * * *
app.listen( port , () => {

    console.log(`Listening to port: ${port}`);
    
});
