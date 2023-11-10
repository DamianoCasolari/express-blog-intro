//import express and dotenv
const express =require('express')
const dotenv =require('dotenv')
dotenv.config()

//create an istance of express
const app = express()

//define route
app.get("/", (req,res)=> {
    res.send("Fino a qui tutto bene")
})

//start server

app.listen(3000, ()=> {
    console.log("Server running correctly: http://localhost:3000");

})