import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

const useData = () => {
	const [dataAPI, setDataAPI] = useState(null);

	useEffect(() => {
		async function getData() {
			const res = await fetch(`http://localhost:3000/api/indicadores`);
			const data = await res.json();
			setDataAPI(data);
		}
		getData();
	}, []);

	return { dataAPI, setDataAPI };
};

export default useData;
