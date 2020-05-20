'use strict';

require('dotenv-safe').config();
const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async () => {
  const result = await axios.get('https://www.moneysavingexpert.com/latesttip#martinappearances');
  const dom = cheerio.load(result.data);
  const element = dom('#martinappearances');
  console.log('---------------');
  console.log(element.text());
  console.log('---------------');
  res.send(element.text());
};

app.get('/', (req, res) => fetchData());
app.post('/', (req, res) => fetchData());

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));