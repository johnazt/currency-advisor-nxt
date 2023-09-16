import {
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell
} from '@mui/material';
import Error from './Error';
import TableFilter from './TableFilter';

export const TableData = ({ data }) => {
	if (data.data?.error) {
		return <Error error={data.data} />;
	}

	return (
		<>
			<h3 className='label-input'>Lista de códigos:</h3>
			<TableContainer
				style={{
					boxShadow: '5px 5px 3px 5px rgba(0,0,0,.3)',
					borderRadius: '5px'
				}}>
				<Table>
					{Object.entries(data).map(([key, value], index) => {
						if (!value.length) {
							return (
								<TableBody key={key}>
									{value.serie ? (
										<>
											<TableFilter value={value} />
										</>
									) : (
										<>
											<TableRow>
												<TableCell
													style={{
														color: '#fff',
														textAlign: 'center',
														backgroundColor: '#049567'
													}}>
													<p className='indicator-data'>{value.nombre}</p>
												</TableCell>
												<TableCell
													style={{
														color: '#fff',
														textAlign: 'center',
														backgroundColor: '#222'
													}}>
													<p className='indicator-data'>{value.codigo}</p>
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
		</>
	);
};
