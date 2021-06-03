
// Setting up the express
const express = require('express')
const app = express()
const port = 3000
const jimp= require("jimp");


const drinks = require('./models/drinks')
const foods = require('./models/foods')


for (let i = 0; i < foods.length; i++) {
    jimp.read(`${foods[i].image}`, function(err, image) {
        if (err) {
            console.log(err)
          }
          else {
            image.write("./images/foodImage.png")
          }
    })
}

for (let i = 0; i < drinks.length; i++) {
    jimp.read(`${drinks[i].image}`, function(err, image) {
        if (err) {
            console.log(err)
          }
          else {
            image.write("./images/drinkImage.png")
          }
    })
}

// route all Action
app.get('/', (req, res) => {
    res.send('Welcome to gitpub App!')
})

// route show all 
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
        // allFoods: foods
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
   
        res.render('drinks_show.ejs', {
            drink: drinks[req.params.id]
        })
})


app.get('/foods/:id', (req, res) => {

      res.render('foods_show.ejs', {
        food: foods[req.params.id]
        
    })
       
})


// listen to port
app.listen(port, () => {
    console.log('Listening to port: ', port)
})