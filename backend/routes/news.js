const express = require('express'); 
const router = express.Router(); 
const newsModel = require('../models/news-model'); 


router.post('/news', (req, res) => {
    
    const news = new newsModel({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        file: req.body.file
    }); 
    
   
    news.save()
             .then(data => {
                 console.log(data);
                 res.status(200).json(data); 
                 
             })
             .catch(err => {
                 console.log(err);
                 res.status(400).json(err); 
                 
             });


}); 

router.get('/news', (req, res) => {
    
    newsModel.find()
             .then(data => {
                res.status(200).json( { 'newsData': data } ); 
            })
             .catch(err => {
                res.status(404).json(err); 
            }); 
}); 

router.delete('/news/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id; 

    newsModel.findByIdAndRemove(id)
             .then(data => {
                 console.log(data);
                 res.status(200).json(data)
             }, err => {
                 console.log(err);
                 res.status(400).json(err); 
             }); 
    
}); 





 
  

module.exports = router; 