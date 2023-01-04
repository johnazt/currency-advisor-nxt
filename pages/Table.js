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
			<h3>Results Today:</h3>

			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<h2>{data.autor ? 'Codigo' : 'Valor'}</h2>
						</TableCell>
						<TableCell>
							<h2>{data.autor ? 'Nombre' : 'Valor'}</h2>
						</TableCell>
					</TableRow>
				</TableHead>

				{Object.entries(data).map(([key, value], index) => {
					return (
						<TableBody key={key}>
							<TableRow>
								<TableCell>
									<h2>{key}</h2>
								</TableCell>
								<TableCell>{value.nombre ? value.nombre : value}</TableCell>
							</TableRow>
							{value.serie &&
								value.serie.map((elem, index) => (
									<TableRow key={index}>
										<TableCell>{elem.valor}</TableCell>
										<TableCell>{elem.fecha}</TableCell>
									</TableRow>
								))}
						</TableBody>
					);
				})}
			</Table>
		</TableContainer>
	);
};
