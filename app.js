'use strict';

require('dotenv-safe').config();
const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (res) => {
  const result = await axios.get('https://www.moneysavingexpert.com/latesttip#martinappearances');
  const dom = cheerio.load(result.data);
  const element = dom('#martinappearances');
  res.send(element.text());
};

app.get('/', (req, res) => fetchData(res));
app.post('/', (req, res) => fetchData(res));

// app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));