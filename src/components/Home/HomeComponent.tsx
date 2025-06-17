import './HomeComponent.css';

import { useEffect, useState, useContext } from 'react';
import { type Rows } from '../../types/Rows';
import rowsJSON from '../../data/rows.json';
import RowsComponent from './Rows/RowsComponent';
import { FilterContext } from './../../context/filterContext';

export default function HomeComponent() {
	const [rows, setRows] = useState<Rows[]>([]);
	const filterContextValue = useContext(FilterContext);
	const { searchQuery } = filterContextValue || {};

	useEffect(() => {
		fetchRows();
	}, []);
	useEffect(() => {
		if (searchQuery) {
			const filteredRows = rowsJSON.filter(
				row =>
					row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					row.description.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setRows(filteredRows || []);
		} else {
			setRows(rowsJSON);
		}
	}, [searchQuery]);

	if (!filterContextValue) return null;

	const fetchRows = async () => {
		setRows(rowsJSON);
	};

	return (
		<div className='my-home my-container'>
			{rows.map(row => (
				<RowsComponent key={row.id} row={row} />
			))}
		</div>
	);
}
