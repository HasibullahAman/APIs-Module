const { json } = require('express');
const express = require('express');
const https = require('https');
const app = express();


app.get('/', function(req, res){
    const url = 'https://api.chucknorris.io/jokes/random#';
    https.get(url, function(response){
        console.log(response);
        response.on('data',function(data){
            const joke = JSON.parse(data)
            // const myObject = {
            //     name:'Hasibullah',
            //     favoritFood :'Mantoo'
            // }
            // console.log(JSON.stringify(myObject))
            const temp = joke.value
            res.write(temp +" Hello Lovaly Masooma Jan");
            res.write('<h1> '+temp +' </h1>');
            res.send();
        })
    })

    // res.send('Server is running:................');
})

app.listen(3000,function(){
    console.log('Listening on port is: 3000');
})
