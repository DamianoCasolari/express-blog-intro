//import express and dotenv
const express =require('express')
const dotenv =require('dotenv')
dotenv.config()

//create an istance of express
const app = express()
const {index} = require("./controllers/posts")


app.use(express.static("public"))

//define route
app.get("/", (req,res)=> {
    res.type("html")
    res.send("<h1>Benvenuto nel mio blog!</h1>")
})

app.get("/posts",index)

//start server
app.listen(3000, ()=> {
    console.log("Server running correctly: http://localhost:3000");

})