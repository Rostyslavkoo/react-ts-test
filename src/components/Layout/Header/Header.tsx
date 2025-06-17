import './Header.css';
import Dropdown from '../components/Dropdown/Dropdown';
import TextField from '../components/TextField/TextField';
import { useState, useEffect, useContext } from 'react';
import { FilterContext } from './../../../context/filterContext';

export default function Header() {
	const [chosenColor, setChosenColor] = useState<string | null>(null);
	const filterContextValue = useContext(FilterContext);
	const { setColor, setSearchQuery } = filterContextValue || {};

	useEffect(() => {
		if (filterContextValue) {
			if (setColor) {
				setColor(chosenColor);
			}
		}
	}, [chosenColor, filterContextValue, setColor]);
	return (
		<div className='my-header'>
			<div className='my-container'>
				<div className='row justify-between align-center gap-10'>
					<div className='col'>
						<Dropdown
							menu={['white', 'green', 'red', 'yellow']}
							chosenColor={chosenColor}
							setChosenColor={setChosenColor}
						/>
					</div>
					<div className='col'>
						<TextField setSearchQuery={setSearchQuery} />
					</div>
					<div className='col'>
						<button>Click</button>
					</div>
				</div>
			</div>
		</div>
	);
}
