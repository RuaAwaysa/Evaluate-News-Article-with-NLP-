var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const aylien = require('aylien_textapi');
const axios = require('axios');

dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))
console.log(__dirname);
const API_KEY = process.env.API_KEY
console.log(API_KEY)
// Variables for url and api key
// var textapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY
//   });
  

// app.get('/', function (req, res) {
//     res.send("This is the server API page, you may access its services via the client app.");
// });

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })

// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


