const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();




app.get('/', function(res, req) {
    req.send('Hi this is Hasibullah Aman');
})


app.listen(3000, () => {
    console.log("Server runing on port 3000 Now:  ")
})