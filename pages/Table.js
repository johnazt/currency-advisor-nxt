import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper
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
							<h2>Indicador</h2>
						</TableCell>
						<TableCell>
							<h2>Fecha</h2>
						</TableCell>
						<TableCell>
							<h2>Valor</h2>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Object.entries(data).map(([key, value]) => {
						if (!value.length) {
							return (
								<TableRow key={key}>
									<TableCell>{key}</TableCell>
									<TableCell>{value.nombre}</TableCell>
									<TableCell>{value.valor}</TableCell>
								</TableRow>
							);
						}
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
