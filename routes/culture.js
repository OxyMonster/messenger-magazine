const express = require('express'); 
const router = express.Router(); 
const cultureModel = require('../models/culture-model');
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



router.post('/culture', upload.single('file'), (req, res) => {

    const culture = new cultureModel({
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
    

    culture.save()
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


router.delete('/culture/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id; 

    cultureModel.findByIdAndRemove(id)
             .then(data => {
                 console.log(data);
                 res.status(200).json(data)
             }, err => {
                 console.log(err);
                 res.status(400).json(err); 
             }); 
    
}); 


router.get('/culture', (req, res) => {

    cultureModel.find()
                .then(data => {
                    res.status(200).json( { 'cultureData': data } ); 
                })
                  .catch(err => {
                    res.status(404).json(err); 
                }); 
});      


  





module.exports = router; 