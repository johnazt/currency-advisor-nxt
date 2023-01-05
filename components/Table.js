import {
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell
} from '@mui/material';
import Error from './Error';

export const TableData = ({ data }) => {
	if (data.data.error) {
		return <Error error={data.data} />;
	}

	return (
		<TableContainer>
			<h3>Lista de Indicadores:</h3>
			<Table>
				{Object.entries(data).map(([key, value], index) => {
					if (!value.length) {
						return (
							<TableBody key={key}>
								{value.serie ? (
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
										{value.serie.map((elem, index) => {
											const date = new Date(elem.fecha);
											const options = {
												year: 'numeric',
												month: 'long',
												day: 'numeric'
											};
											const fecha = date.toLocaleDateString('es-ES', options);

											return (
												<TableRow key={index}>
													<TableCell>{fecha}</TableCell>
													<TableCell>{elem.valor}</TableCell>
												</TableRow>
											);
										})}
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
					}
				})}
			</Table>
		</TableContainer>
	);
};
