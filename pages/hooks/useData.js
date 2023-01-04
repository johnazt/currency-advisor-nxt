import { useEffect, useState } from 'react';

const useData = () => {
	const [dataAPI, setDataAPI] = useState(null);

	useEffect(() => {
		async function getData() {
			const res = await fetch('http://localhost:8000/api/indicadores');
			const data = await res.json();
			setDataAPI(data);
		}
		getData();
	}, []);

	return [dataAPI, setDataAPI];
};

export default useData;
