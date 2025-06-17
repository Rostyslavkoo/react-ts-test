import './RowsComponent.css';
import { type Rows } from './../../../types/Rows';
import { useContext, useState } from 'react';
import { FilterContext } from './../../../context/filterContext';

export default function RowsComponent(props: { row: Rows }) {
	const filterContextValue = useContext(FilterContext);
	if(!filterContextValue) return null;
	
	const color = filterContextValue?.color
	return (
		<div className='my-rows'>
			<div
				className='card bold'
				style={{ background: color || 'white' }}
			>
				{props.row.title}
			</div>
			<div className='card' style={{ background: color || 'white' }}>
				{props.row.description}
			</div>
		</div>
	);
}
