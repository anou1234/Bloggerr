let express = require("express")
let path = require("path")
let hbs = require("hbs")
let mongoose = require('mongoose')


let bodyParser = require('body-parser');

let app = express()
app.use('/js', express.static(__dirname + './../public/js'));
app.use('/css', express.static(__dirname + './../public/css'));
app.use("/videos",express.static(path.join(__dirname, "public/videos")))
app.use("/images",express.static(path.join(__dirname, "public/images")))
app.use('/assets', express.static(__dirname + './../public/assets'));
app.use('/Open_Sans', express.static(__dirname + './../public/Open_Sans'));
app.use('/webfonts', express.static(__dirname + './../public/webfonts'));
app.use('/Inspiration', express.static(__dirname + './../public/Inspiration'));
app.set("view engine", "hbs")
app.set("views",path.join(__dirname, "../templates/views"))
hbs.registerPartials(path.join(__dirname, "../templates/partials"))
app.get("/home",(_req, res)=>{
    res.render("home")
})
app.get("/writeup", (_req,res)=>{
    res.render("writeup",{"username":"Anoushka"})
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create schema

let schema = new
mongoose.Schema(
{
name:
{type:String,
required:true},
    
email:
{type:String,
required:true,
unique:true},

subject:
{type:String,
required:true,
unique:true},

description:
{type:String,
required:true,
unique:true},

repeat:
Boolean})


//create a collection


let User = new
mongoose.model("User",
schema)

app.post("/", (req, res) => {
        var myData = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            description: req.body.description,
        };
        var me =new User (myData);
        me.save(function(err){
            if(err){
                console.log('error occured')
            }else{
                console.log("data added")
            }
        })
        res.send("Done!")     
})



app.listen("3000", ()=>{
    console.log('connected to server...')
    console.log("dbserver is connected...")

})
let connectdb = require('./../public/connection/connectdb.js')
connectdb()






