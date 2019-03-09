const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', function(req, res){
    console.log(req.query);
    console.log(apiKey);
    axios({
        method: 'GET',
        url: `http://api.sportradar.us/mlb/trial/v6.5/en/players/${req.query.p}/pitch_metrics.json?api_key=${apiKey}`,
        timeout: 1000*8})
        .then(function(response){
            console.log(response.data);
            console.log(response.data.player.seasons)
            res.status(200).send(response.data)
        })
        .catch(function(err){
            res.status(404).send(err.response.data)
        });
});

module.exports = app;

//http://api.sportradar.us/mlb/trial/v6.5/en/players/d3351c6e-12cf-4ab5-b651-ad23d49c4245/pitch_metrics.json?api_key=cck6patgy5u6wyvanhejrrg2
