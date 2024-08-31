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


// Variables for url and api key
const API_KEY = process.env.API_KEY
console.log(API_KEY)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    })

// POST Route
app.post('/api/analyze', async (req, res) => {
    const { url } = req.body;

    try {
        // Make a POST request to MeaningCloud API
        const response = await axios.post('https://api.meaningcloud.com/sentiment-2.1', null, {
            params: {
                key: API_KEY,
                url: url,
                lang: 'auto',
                of: 'json'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }

        });

        const data = response.data;
        console.log("this the data res fronm the server "+data);
        res.json({
            polarity: data.score_tag,
            subjectivity: data.subjectivity,
            text: data.sentence_list[0].text || '',
        });
    } catch (error) {
        console.error('Error processing the request:', error);
        res.status(500).json({ error: 'Error processing the request' });
    }
});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


