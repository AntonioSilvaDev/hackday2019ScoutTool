const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const appid = process.env.APP_ID;

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', function(req, res){
    axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${req.query.q}&appid=${appid}`,
        timeout: 1000*8})
        .then(function(response){
            res.status(200).send(response.data)
        })
        .catch(function(err){
            res.status(404).send(err.response.data)
        });
});


module.exports = app;
