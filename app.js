'use strict';

require('dotenv-safe').config();
const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';

const express = require('express');
const next = require('next');
const app = next({ dev });
const axios = require('axios');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const handle = app.getRequestHandler();

const fetchData = async (res) => {
  const result = await axios.get(process.env.SCRAPE_URL);
  const dom = cheerio.load(result.data);
  const element = dom('#martinappearances');
  res.send(element.text());
};

app.prepare()
	.then(() => {
		const server = express();
		server.use(bodyParser.urlencoded({ extended: true }));
		server.use(bodyParser.json());

		server.get('/', (req, res) => fetchData(res));
    server.post('/', (req, res) => fetchData(res));

		server.listen(3000, (err) => {
			if (err) throw err;
			console.log('App ready on http://localhost:3000');
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});