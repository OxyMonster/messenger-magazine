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
  





module.exports = router; 