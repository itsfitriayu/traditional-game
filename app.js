//import, extension
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const app = express();

//var const
const PORT = 8000;

app.use(morgan('tiny'))
app.set('view engine', 'ejs');

//static file
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false}))

//routes
app.use(router);

// cause of error
app.get('/error',(req,res)=> {
  throw new Error ('Error!');
})

 // error handling
  app.use((err,req,res,next)=> {
    res.status(500).render('500error')
  })
  
  //404 
  app.use((req,res,next)=> {
    res.status(404).render('404error')
  })

//listen
app.listen(PORT ,() => {
  console.log(`server listening at http://localhost:${PORT}`)
})

