import './Header.css';
import Dropdown from '../Footer/components/Dropdown';
import { useState, useEffect, useContext } from 'react';
import { FilterContext } from './../../../context/filterContext';

export default function Header() {
	const filterContextValue = useContext(FilterContext);
	const [colorContext, setColor] = useState<string | null>(filterContextValue?.color || null);

	useEffect(() => {
		setColor(colorContext);
	}, [colorContext]);
	return (
		<div className='my-header'>
			<div className='my-container'>
				<div className='row justify-between align-center gap-10'>
					<div className='col'>
						<Dropdown
							menu={['green', 'red', 'yellow']}
							chosenColor={colorContext}
							setChosenColor={setColor}
						/>
					</div>
					<div className='col'>
						<input type='text' />
					</div>
					<div className='col'>
						<button>Click</button>
					</div>
				</div>
			</div>
		</div>
	);
}
