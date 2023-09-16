import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import Link from 'next/link';

const TableNoData = () => {
	return (
		<>
			<TableRow style={{ backgroundColor: '#fcaa67' }}>
				<TableCell>
					<p className='indicator-data'>Data no disponible</p>
				</TableCell>
				<TableCell>
					<p className='indicator-data'>Data no disponible</p>
				</TableCell>
			</TableRow>
		</>
	);
};

export default TableNoData;
