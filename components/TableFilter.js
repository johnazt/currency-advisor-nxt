import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import TableNoData from './TableNoData';

const TableFilter = ({ value }) => {
	return (
		<>
			<TableRow style={{ backgroundColor: '#222222' }}>
				<TableCell style={{ color: '#fff' }}>
					<h2>Codigo:</h2>
				</TableCell>
				<TableCell style={{ color: '#fff' }}>
					<h2>{value.codigo.toUpperCase()}</h2>
				</TableCell>
			</TableRow>
			<TableRow style={{ backgroundColor: '#222222' }}>
				<TableCell style={{ color: '#fff' }}>
					<h2>Nombre:</h2>
				</TableCell>
				<TableCell style={{ color: '#fff' }}>
					<h2>{value.nombre}</h2>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<h2>Fecha</h2>
				</TableCell>
				<TableCell>
					<h2>Valor</h2>
				</TableCell>
			</TableRow>
			{value.serie.length > 0 ? (
				value.serie.map((elem, index) => {
					const date = new Date(elem.fecha);
					const options = {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					};
					const fecha = date.toLocaleDateString('es-ES', options);
					return (
						<TableRow>
							<TableCell style={{ fontSize: '1.2rem' }}>{fecha}</TableCell>
							<TableCell style={{ fontSize: '1.2rem' }}>{elem.valor}</TableCell>
						</TableRow>
					);
				})
			) : (
				<TableNoData />
			)}
		</>
	);
};

export default TableFilter;
