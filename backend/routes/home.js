const express = require('express'); 
const router = express.Router(); 

// * * Models * * 
const newsModel = require('../models/news-model');
const headlinesModel = require('../models/headlines-model');


router.get('/home', (req, res) => {

//  * * Get News * * 
    // if(req.body.id === 'news') {
        
        newsModel.find()
                 .then(data => {
                        res.status(200).json( { 'newsData':data } )
                    })
                 .catch(err => {
                        res.status(404).json(err); 
                    }); 
        
                    
    // }; 
//  * * Get Headlines * * 
    // if(req.body.id === 'headlines') {

        headlinesModel.find()
                      .then(data => {
                        res.status(200).json( { 'headlinesData': data } )
                    })
                      .catch(err => {
                        res.status(404).json(err); 
                    }); 

    // }; 
    
            
    
});  






module.exports = router; 