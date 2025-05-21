require('dotenv').config(); // Load environment variables from .env file
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = process.env.NEWS_API_KEY; // Use the API key from .env

app.get('/api/news', async (req, res) => {
    const country = req.query.country || 'us'; // Default to US news

    console.log(`Fetching news for country: ${country}`); // Log the country being fetched

    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                country: country,
                apiKey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error fetching news:', error.response.data);
            res.status(error.response.status).json({ error: error.response.data.message });
        } else {
            console.error('Error fetching news:', error.message);
            res.status(500).json({ error: 'Failed to fetch news articles.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});