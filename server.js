//Require express library that was downloaded
const express = require("express")

//set up the server with app variable calling express as a function
const app = express()

//require bcrypt
const bcrypt = require('bcrypt')

//create a variable to store users
const users = []
//OR this is where a database comes in

//for assigning ejs
app.set('view engine', 'ejs')

//access info coming from forms inside of req variable inside of the post method
app.use(express.urlencoded({ extended: false }))  //req.body.(name field)

//set up routes ("/" - root path)
app.get("/", (req, res) => {
    res.render('index.ejs', { name: 'Courdevelops'})
})

//login route (get)
app.get("/login", (req, res) => {
    res.render('login.ejs')
})

//login route (post)
app.post("/login", (req, res) => {

})

//register route (get)
app.get("/register", (req, res) => {
    res.render('register.ejs')
})

//register route (post)
app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        //BELOW is if the users are here and not in a database
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

//make servern run pass through port #
app.listen(3000)