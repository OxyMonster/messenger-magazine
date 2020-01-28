const express = require('express'); 
const router = express.Router(); 


router.get('/news', (req, res) => {
    res.status(200).json("sucess"); 
}); 






module.exports = router; 