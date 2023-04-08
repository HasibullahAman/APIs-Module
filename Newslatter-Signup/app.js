const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app =  express();



app.get('/', function(res,req){
    res.send("Hello man I'm Here! ")
})







app.listen(3000,()=>{
    console.log("Server runing on port 3000 Now:  ")
})