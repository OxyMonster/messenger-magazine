const express = require('express'); 
const router = express.Router(); 
const headlinesModel = require('../models/headlines-model'); 



router.post('/headlines', (req, res) => {
    const headlines = new headlinesModel({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        file: req.body.file, 
    }); 

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