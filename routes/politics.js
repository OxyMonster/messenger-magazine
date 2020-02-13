const express = require('express'); 
const router = express.Router(); 
const politicsModel = require('../models/politics-model');
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



router.post('/politics', upload.single('file'), (req, res) => {

    const politics = new politicsModel({
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
    

    politics.save()
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

router.delete('/politics/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id; 

    politicsModel.findByIdAndRemove(id)
             .then(data => {
                 console.log(data);
                 res.status(200).json(data)
             }, err => {
                 console.log(err);
                 res.status(400).json(err); 
             }); 
    
}); 


router.get('/politics', (req, res) => {

    politicsModel.find()
                  .then(data => {
                    res.status(200).json( { 'politicsData': data } ); 
                })
                  .catch(err => {
                    res.status(404).json(err);     
                }); 
});  


router.get('/politics/:id', (req, res) => {
    politicsModel.findById(req.params.id)
                .then(data => {

                 res.status(200).json(data); 
                 console.log(data);
                 
             })
             .catch(err => {

                 console.log(err);
                 res.status(400).json(err); 
                 
             })
}); 


  





module.exports = router; 