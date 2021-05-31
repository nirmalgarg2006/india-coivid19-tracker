const express = require("express");
const app = express();

app.get('/', (req,res) => {
    //res.send("hello world");
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/index.html', (req,res) => {
    //res.send("hello world");
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/statewisecovidcases.html', (req,res) => {
    //res.send("hello world");
    res.sendFile( __dirname + "/" + "statewisecovidcases.html" );
});

app.get('/image', (req,res) => {
    res.sendFile( __dirname + "/" + "sampleimage.png" );
})

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})