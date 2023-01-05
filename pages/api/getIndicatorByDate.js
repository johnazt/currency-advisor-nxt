const fetch = require('isomorphic-unfetch');

export default async function getIndicatorByDate(type, date) {
	const convertedDate = date.split('-').reverse().join('-');

	try {
		const response = await fetch(
			`https://mindicador.cl/api/${type}/${convertedDate}`
		);
		const data = await response.json();
		return {
			data
		};
	} catch (error) {
		throw error;
	}
}
