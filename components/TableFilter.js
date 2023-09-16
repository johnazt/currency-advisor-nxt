import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import TableNoData from './TableNoData';
import Link from 'next/link';

const TableFilter = ({ value }) => {
	return (
		<>
			<TableRow style={{ backgroundColor: '#222222' }}>
				<TableCell>
					<h2>Codigo:</h2>
				</TableCell>
				<TableCell>
					<h2>{value.codigo.toUpperCase()}</h2>
				</TableCell>
			</TableRow>
			<TableRow style={{ backgroundColor: '#222222' }}>
				<TableCell>
					<h2>Nombre:</h2>
				</TableCell>
				<TableCell>
					<h2>{value.nombre}</h2>
				</TableCell>
			</TableRow>
			<TableRow style={{ backgroundColor: '#222222' }}>
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
						<TableRow
							key={index}
							style={{ backgroundColor: '#fcaa67' }}>
							<TableCell>
								<p className='indicator-data'>{fecha}</p>
							</TableCell>
							<TableCell>
								<p className='indicator-data'>{elem.valor}</p>
							</TableCell>
						</TableRow>
					);
				})
			) : (
				<TableNoData />
			)}

			<TableRow style={{ backgroundColor: '#222222' }}>
				<TableCell>
					<h2>Unidad de Medida</h2>
				</TableCell>
				<TableCell>
					<h2>{value['unidad_medida']}</h2>
				</TableCell>
			</TableRow>
		</>
	);
};

export default TableFilter;
