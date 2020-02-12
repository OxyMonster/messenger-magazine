const express = require('express'); 
const router = express.Router(); 
const economyModel = require('../models/economy-model');
const newsModel = require('../models/news-model'); 
const multer = require('multer'); 



let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads'); 
    },
    filename: function(req, file, cb ) {
        cb(null, Date.now() + file.originalname)    
    }
}); 

let upload  = multer({storage: storage});        



router.post('/economy', upload.single('file'), (req, res) => {

    const economy = new economyModel({
        title: req.body.title,
        description: req.body.description,  
        date: req.body.date,
        file: req.file, 
    }); 

    const news = new newsModel({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        file: req.file, 
    }); 

    console.log(req.file);
    

    economy.save()
             .then(data => {
                 console.log(data);
                 res.status(200).json(data); 
             })
             .catch(err => {
                 res.status(400).json(err); 
                 console.log(err);
             });

    news.save()
             .then(data => {
                 console.log(data);
                 res.status(200).json(data); 
             })
             .catch(err => {
                 res.status(400).json(err); 
                 console.log(err);
             }); 

            
}); 


router.get('/economy', (req, res) => {

    economyModel.find()
                  .then(data => {
                    res.status(200).json( { 'economyData': data } ); 
                })
                  .catch(err => {
                    res.status(404).json(err); 
                }); 
});      


  





module.exports = router; 