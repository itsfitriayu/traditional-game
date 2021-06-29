const express = require('express');
const router = express.Router()

  
  // error handling
  app.use((err,req,res,next)=> {
    res.status(500).render('500error')
  })
  
  //404 
  app.use((req,res,next)=> {
    res.status(404).render('404error')
  })

module.exports = error