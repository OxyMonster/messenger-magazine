const express = require('express'); 
const app = express(); 

const cors = require('cors'); 

// * * * Routes * * *
const homeRoute = require('./routes/home');
const newsRoute = require('./routes/news');
const headlinesRoute = require('./routes/headlines');

app.use(cors); 
app.use(express.json()); 

app.use(homeRoute);
app.use(newsRoute); 
app.use(headlinesRoute); 


// * * * Connect to mongoDB * * * 




// * * * Server * * *
app.listen(3000, () => {
    console.log("listening to port");
    
})