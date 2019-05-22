//importing express package
const express = require("express");

//creating app version
//with the help of express()
const app = express();


//Creating Routes
//get

//
//
//
app.get("/posts",(req,res) => {
    res.send({
        name : "Pankaj",
        lastName : "Bhardwaj"
    })
})


//giving port number for running server.
app.listen(4000,() => {
    console.log("Server is running on port 4545")
})