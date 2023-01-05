import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const TableNoData = () => {
	return (
		<>
			<TableRow>
				<TableCell style={{ fontSize: '1.2rem' }}>Data no disponible</TableCell>
				<TableCell style={{ fontSize: '1.2rem' }}>Data no disponible</TableCell>
			</TableRow>
		</>
	);
};

export default TableNoData;
