const express = require('express')

const app = express();


app.get('/', (req,res)=>{
    res.send("<h1>Welcome to my Page</h1>");
});

app.get('/hello', (req,res)=>{
    res.send("<h1>Hello :D</h1>");
});

app.get('/bye', (req,res)=>{
    res.send("<h1>Bye friend :D</h1>");
});


//PORT CONFIGURATION
const port = process.env.PORT || 3000;
app.listen(port, () =>{console.log(`App listen on port ${port}`);})