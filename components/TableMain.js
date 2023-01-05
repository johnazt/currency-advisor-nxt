import {
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell
} from '@mui/material';
import Error from './Error';
import TableFilter from './TableFilter';
import TableNoData from './TableNoData';

export const TableData = ({ data }) => {
	if (data.data?.error) {
		return <Error error={data.data} />;
	}

	return (
		<TableContainer>
			<h3>Lista de códigos:</h3>
			<Table>
				{Object.entries(data).map(([key, value], index) => {
					if (!value.length) {
						return (
							<TableBody key={key}>
								{value.serie ? (
									<TableFilter value={value} />
								) : (
									<>
										<TableRow>
											<TableCell
												style={{
													color: '#fff',
													textAlign: 'center',
													backgroundColor: '#049567'
												}}
											>
												<p style={{ fontSize: '1.3rem' }}>{value.nombre}</p>
											</TableCell>
											<TableCell
												style={{
													color: '#fff',
													textAlign: 'center',
													backgroundColor: '#222'
												}}
											>
												<p style={{ fontSize: '1.5rem' }}>{value.codigo}</p>
												<small>{value.nombre}</small>
											</TableCell>
										</TableRow>
									</>
								)}
							</TableBody>
						);
					}
				})}
			</Table>
		</TableContainer>
	);
};
