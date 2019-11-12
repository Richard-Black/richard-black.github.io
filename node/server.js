const express = require('express');
const app = express();
const albums = require("./albums");

app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/cakes',(req,res)=>{
    res.send(albums);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`lisening on port ${port}...`);
});