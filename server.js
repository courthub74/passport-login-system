//Require express library that was downloaded
const express = require("express")

//set up the server with app variable calling express as a function
const app = express()

//for assigning ejs
app.set('view engine', 'ejs')

//set up routes ("/" - root path)
app.get("/", (req, res) => {
    res.render('index.ejs', { name: 'Courdevelops'})
})

//login route (get)
app.get("/login", (req, res) => {
    res.render('login.ejs')
})

app.get("/register", (req, res) => {
    res.render('register.ejs')
})

//make servern run pass through port #
app.listen(3000)