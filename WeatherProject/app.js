// const { response } = require('express');
const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res, next) => {

    const url = "https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=political&type=single";
    https.get(url, (response)=>{
        console.log(response.statusCode);
        response.on('data', (data) =>{
            const WeatherData = JSON.parse(data);
            const temp = WeatherData.flags.religious
            res.send('The joke is:'+ temp)

        })
    })


    // res.send("server is running now!")
    })
app.listen(3000,() =>{
    console.log("Weather app srever run on port 3000: ")
})