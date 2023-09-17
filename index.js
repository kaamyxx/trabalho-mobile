const express = require('express');
const app = express();

const routes = require ('./src/routes/routes');

app.use('/'. routes);


app.listen(3000,()=>{
    const id = req.params.id;
    console.log('servidor funcinando');
});