
// Setting up the express
const express = require('express')
const app = express()
const port = 3000

const drinks = require('./models/drinks')

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

// route show one item
app.get('/drinks/:id', (req, res) => {
   
        res.render('drinks_show.ejs', {
            drink: drinks[req.params.id]
        })
})

// listen to port
app.listen(port, () => {
    console.log('Listening to port: ', port)
})