const exp = require("constants");
const express = require("express");
const path = require("path");

const app = express();
const viewsPath = path.dirname(__dirname)+"/views";


app.set("views",viewsPath)
app.use(express.static(viewsPath))
// app.use(express.json())      Data cannot be parsed in json form as it is urlencoded
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    // res.status(200).render("home.pug");
    res.sendFile(viewsPath+"/demo.html");
})
// app.post("/",(req,res)=>{
//     var data = req.body
//     console.log(data.Name)
//     res.status(200).render("index.pug");
// })

app.listen(80,"127.0.0.1",()=>{
    console.log("listening...")
})