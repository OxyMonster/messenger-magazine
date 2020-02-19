const express = require('express'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  
const router = express.Router(); 

const Admin = require('../models/admin-model'); 


router.post('/admin-create', async (req, res) => {

  const admin = new Admin({
    
    userName: req.body.userName, 
    password: req.body.password

  }); 

  try {

    const savedUser = await admin.save(); 
    res.status(200).json('User Created', savedUser); 


  } catch (err) {

    res.status(400).json(err); 
    console.log(err)
  } 


  })
  
router.post('/admin-login', (req, res) => {


  const user = {
    userName: req.body.userName, 
    password: req.body.password
  }; 

  console.log(user);
  

  if ( user.userName === process.env.ADMIN_USERNAME && user.password === process.env.ADMIN_PASSWORD ) {

    const acessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET ); 
    res.status(201).json({ acessToken }); 

  } else {
    res.status(401).json('wrong'); 
  }



 }); 


 function verifyToken(req, res, next ) {
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