import './HomeComponent.css';

import { useEffect, useState } from 'react';
import { type Rows } from '../../types/Rows';
import rowsJSON from '../../data/rows.json';
import RowsComponent from './Rows/RowsComponent';

export default function HomeComponent() {
	const [rows, setRows] = useState<Rows[]>([]);
		
	useEffect(() => {
		fetchRows();
	}, []);

	const fetchRows = async () => {
		setRows(rowsJSON);
	};

	return (
		<div className='my-home my-container'>
			{rows.map(row => (
				<RowsComponent key={row.id} row={row}/>
			))}
		</div>
	);
}
