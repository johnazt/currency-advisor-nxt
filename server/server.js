const fetch = require('isomorphic-unfetch');
const express = require('express');

const app = express();
const PORT = 8000;

app.get('/api/indicadores', async (req, res) => {
	const response = await fetch('https://mindicador.cl/api');
	const data = await response.json();
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server is running in PORT: ${PORT}`);
});
