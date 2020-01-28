const express = require('express'); 
const router = express.Router(); 


router.get('/headlines', (req, res) => {
    res.status(200).json("sucess"); 
}); 
  





module.exports = router; 