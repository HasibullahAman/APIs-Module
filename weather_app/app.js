const express = require('express');
const https = require('https');
const app = express();


app.get('/', function(req, res){
    const url = 'https://api.chucknorris.io/jokes/random#';
    https.get(url, function(response){
        console.log(response);
    })

    res.sendStatus('Server is running:................');
})

app.listen(3000,function(){
    console.log('Listening on port is: 3000');
})