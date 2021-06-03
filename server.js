
// Setting up the express
const express = require('express')
const app = express()
const port = 3000


const drinks = require('./models/drinks')
const foods = require('./models/foods')

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "image/png");
    next();
});

// route all Action
app.get('/', (req, res) => {
    res.send('Welcome to gitpub App!')
})

// route show all 
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get('/foods', (req, res) => {
    res.render('foods_index.ejs', {
        allDrinks: drinks,
        allFoods: foods
    })
})

// route show one item
app.get('/drinks/:id', (req, res) => {
        // res.type('png')
        res.render('drinks_show.ejs', {
            drink: drinks[req.params.id]
        })
})


app.get('/foods/:id', (req, res) => {
    //   res.type('png')
      res.render('foods_show.ejs', {
        food: foods[req.params.id]
        
    })
       
})


// listen to port
app.listen(port, () => {
    console.log('Listening to port: ', port)
})