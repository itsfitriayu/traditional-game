const express = require('express');
const router = express.Router()
const users = [];

router.get('/', (req, res) => {
  res.render('landing-page')
})

router.get('/the-game' ,(req,res)=> {
  res.render('the-game')
})

router.get('/login' ,(req,res)=> {
  res.render('login')
})

router.post('/login', (req,res)=>{
  const {email, password} = req.body
  users.push({email,password});
  res.redirect('/');
})

module.exports = router