const express = require('express'); 
const router = express.Router(); 

const fs = require('fs'); 


router.get('/uploads/:id', (req, res) => {
    
    console.log("=))");
    
           const path = '../backend/uploads/' + req.params.id
           const stat = fs.statSync(path)
           const fileSize = stat.size
           const head = {
             'Content-Length': fileSize,
            //  'Content-Type': 'video/mp4',
           }
           res.writeHead(200, head)
           fs.createReadStream(path).pipe(res);
           
   }); 



   module.exports = router; 