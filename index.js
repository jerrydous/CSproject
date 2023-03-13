const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', __dirname + '/views')
app.get("/", async(req, res) => {
    res.render("home.ejs")
})
app.get("/about", async(req, res) => {
    res.render("about.ejs")
})
app.get("/projects", async(req, res) => {
    res.render("csprojects.ejs")
})
app.listen(3000, () => {
    console.log("Start listening to port 3000")
})