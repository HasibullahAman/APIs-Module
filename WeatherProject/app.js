const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send("server is running now!")
    })



app.listen(3000,() =>{
    console.log("Weather app srever run on port 3000: ")
})