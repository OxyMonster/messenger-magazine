const express = require('express'); 
const router = express.Router(); 
const multer = require('multer'); 

const newsModel = require('../models/news-model'); 


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads'); 
    },
    filename: function(req, file, cb ) {
        cb(null, Date.now() + file.originalname)
    }
}); 


let upload  = multer({storage: storage}); 


// router.post('/news', upload.single('file'), (req, res) => {

//     const news = new newsModel({
//         title: req.body.title,
//         description: req.body.description,
//         date: req.body.date,
//         file: req.file
//     }); 
//     console.log(req.file);
        
   
//     news.save()
//         .then(data => {
//             console.log(data);
//             res.status(200).json(data); 
                 
//              })
//         .catch(err => {
//              console.log(err);
//              res.status(400).json(err); 
                 
//              });


// }); 

router.get('/news', (req, res) => {
    
    newsModel.find()
             .then(data => {
                res.status(200).json( { 'newsData': data } ); 
            })
             .catch(err => {
                res.status(404).json(err); 
            }); 
}); 

router.get('/news/:id', (req, res) => {
    newsModel.findById(req.params.id)
             .then(data => {

                 res.status(200).json(data); 
                 console.log(data);
                 
             })
             .catch(err => {

                 console.log(err);
                 res.status(400).json(err); 
                 
             })
})

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