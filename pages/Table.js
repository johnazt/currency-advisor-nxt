import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell
} from '@mui/material';

export const TableData = ({ data }) => {
	console.log(data);

	return (
		<TableContainer>
			<h3>Lista de Indicadores:</h3>

			<Table>
				{Object.entries(data).map(([key, value], index) => {
					return (
						<TableBody key={key}>
							{value.serie ? (
								<>
									<TableRow>
										<TableCell>
											<h2>Valor</h2>
										</TableCell>
										<TableCell>
											<h2>Fecha</h2>
										</TableCell>
									</TableRow>
									{value.serie.map((elem, index) => (
										<TableRow key={index}>
											<TableCell>{elem.valor}</TableCell>
											<TableCell>{elem.fecha}</TableCell>
										</TableRow>
									))}
								</>
							) : (
								<TableRow>
									<TableCell>
										<h2>{key}</h2>
									</TableCell>
									<TableCell>{value.nombre ? value.nombre : value}</TableCell>
								</TableRow>
							)}
						</TableBody>
					);
				})}
			</Table>
		</TableContainer>
	);
};
