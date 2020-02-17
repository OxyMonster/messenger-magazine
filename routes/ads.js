const express = require('express'); 
const router = express.Router(); 
const adsModel = require('../models/ads-model');
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



router.post('/ads', upload.single('file'), (req, res) => {

    const ads = new adsModel({
        file: req.file, 
        linkPath: req.body.linkPath
    }); 

    console.log(req.file);
    

    ads.save()
             .then(data => {
                 console.log(data);
                 res.status(200).json(data); 
             })
             .catch(err => {
                 res.status(400).json(err); 
                 console.log(err);
             }); 

            
}); 


router.delete('/ads/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id; 

    adsModel.findByIdAndRemove(id)
             .then(data => {
                 console.log(data);
                 res.status(200).json(data)
             }, err => {
                 console.log(err);
                 res.status(400).json(err); 
             }); 
    
}); 


router.get('/ads', (req, res) => {

    adsModel.find()
                .then(data => {
                    res.status(200).json( { 'adsData': data } ); 
                })
                  .catch(err => {
                    res.status(404).json(err); 
                }); 
}); 

router.get('/ads/:id', (req, res) => {
    adsModel.findById(req.params.id)
                .then(data => {

                 res.status(200).json(data); 
                 console.log(data);
                 
             })
             .catch(err => {

                 console.log(err);
                 res.status(400).json(err); 
                 
             }); 
}); 


  





module.exports = router; 