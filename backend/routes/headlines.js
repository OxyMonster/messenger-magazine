const express = require('express'); 
const router = express.Router(); 
const headlinesModel = require('../models/headlines-model'); 
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



router.post('/headlines', upload.single('file'), (req, res) => {
    const headlines = new headlinesModel({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        file: req.file, 
    }); 

    console.log(req.file);
    

    headlines.save()
             .then(data => {
                 console.log(data);
                 res.status(200).json(data); 
             })
             .catch(err => {
                 res.status(400).json(err); 
                 console.log(err);
             }); 
}); 


router.get('/headlines', (req, res) => {

    headlinesModel.find()
                  .then(data => {
                    res.status(200).json( { 'headlinesData': data } ); 
                })
                  .catch(err => {
                    res.status(404).json(err); 
                }); 
});      

router.get('/headlines/:id', (req, res) => {

    console.log(req.params);
    
    headlinesModel.findById(req.params.id)
                  .then(data => {
                      res.status(200).json(data); 
                      console.log(data);
                      
                  })
                  .catch(err => {
                      res.status(400).json(data); 
                  })
});

router.delete('/headlines/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id; 

    headlinesModel.findByIdAndRemove(id)
                  .then(data => {
                        console.log(data);
                        res.status(200).json('Deleted')
                    }, err => {
                        console.log(err);
                        res.status(400).json(err); 
                    }); 
    
}); 
  





module.exports = router; 