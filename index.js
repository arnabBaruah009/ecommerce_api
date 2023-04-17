const express = require('express');
const port = 8000;
const app = express();

//connecting to databse
const db = require('./config/mongoose');

//set the routes
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
        return;
    }

    console.log("Server is running in port:", port);
})