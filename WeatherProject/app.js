const { response } = require('express');
const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res, next) => {

    const url = "https://v2.jokeapi.dev/joke/Programming#";
    https.get(url, (response)=>{
        console.log(response);
    })

    res.send("server is running now!")
    })



app.listen(3000,() =>{
    console.log("Weather app srever run on port 3000: ")
})