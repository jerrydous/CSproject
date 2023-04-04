const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', __dirname + '/views')
app.use(express.urlencoded({ extended: true }))
const { MongoClient, ServerApiVersion, ServerDescriptionChangedEvent } = require('mongodb');
const mongoose = require('mongoose')
const uri = "mongodb+srv://douwenduo:AZ0VIEUgsfnCOjPa@cluster0.gxcwbmi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const characterSchema = new mongoose.Schema({
    name: String,
    height: String,
    mass: String
})
const studentinfo = new mongoose.Schema({
    name: String,
    lastname: String
})
const student = mongoose.model('Student', studentinfo)
const Chara = mongoose.model('Character', characterSchema)

app.get('/datasubmit', async(req, res) => {
    res.render("submitdata.ejs")
})
app.post('/poststudentinfo', async(req, res) => {
    const connection = await mongoose.connect(uri);
    const data = new student({
        name: req.body.name,
        lastname: req.body.lastname
    })
    await data.save().then(() => {
        console.log("Data saved")
        res.redirect('/datasubmit')
    })
})
app.get("/home", async(req, res) => {
    res.render("home.ejs")
})
app.get("/about", async(req, res) => {
    res.render("about.ejs")
})
app.get("/projects", async(req, res) => {
    res.render("csprojects.ejs")
})
app.get("/tabletennis", async(req, res) => {
    res.render("tabletennis.ejs")
})
app.listen(3000, () => {
    console.log("Start listening to port 3000")
})