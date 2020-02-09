const express = require('express'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
const router = express.Router(); 

const AdminSchema = require('../models/admin-model'); 


router.post('/admin', (req, res) => {

  
  const user = {
    userName: req.body.userName,
    password: req.body.password
  }; 

  console.log(user);
    

  if( user.userName === '1'  && user.password === '2' ) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET); 
    res.json({ accessToken }); 
  } else {
    res.status(403).json('wrong'); 
  }

  })
  
router.post('/create', (req, res) => {

    console.log(req.body);
    
  // const user = new AdminSchema ({
  //   userName: req.body.userName,
  //   password: req.body.password
  // }); 

  // console.log(user);
  // res.send(user,'sadasdasdsadsa')
  

  // user.save()
  //     .then(data => {
  //       console.log("admin created");
  //       res.send(data); 
        
  //     })
  //     .catch(err => {
  //       console.log(err);
        
  //     })
               


 }); 


 function authenticateToken(req, res, next ) {
   const authHeader = req.headers['authorization']; 
   const token = authHeader && authHeader.split(' ')[1]; 

   if ( token === null ) res.status(401); 

   jwt.verify(token, process.ACCESS_TOKEN_SECRET, (err, user) => {
     
      if (err) return res.sendStatus(403); 
      req.user = user; 
      next(); 

   })
   
 }


module.exports = router; 