
// Setting up the express
const express = require('express')
const app = express()
const port = 3000

// route all Action
app.get('/', (req, res) => {
    res.send('Welcome to gitpub App!')
})

// listen to port
app.listen(port, () => {
    console.log('Listening to port: ', port)
})