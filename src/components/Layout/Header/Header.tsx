import './Header.css';
import Dropdown from '../components/Dropdown/Dropdown';
import TextField from '../components/TextField/TextField';
import Button from '../components/Button/Button';
import { useState, useEffect, useContext } from 'react';
import { FilterContext } from './../../../context/filterContext';
import { SnackbarContext } from './../../../context/snackbarContext';

export default function Header() {
	const [chosenColor, setChosenColor] = useState<string | null>(null);
	const filterContextValue = useContext(FilterContext);
	const snackbarContextValue = useContext(SnackbarContext);

	const { setColor, setSearchQuery } = filterContextValue || {};
	const [snackbarNumber, setSnackbarNumber] = useState(1);
	const handleClickSnackbar = () => {
		setSnackbarNumber(prev => prev + 1);
		if (snackbarContextValue) {
			const { setSnackbars } = snackbarContextValue;
			if (setSnackbars) {
				setSnackbars(prev => [...prev, `snackbar - ${snackbarNumber} `]);
			}
		}
	};
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
						<Button
							label={'Click'}
							onClick={handleClickSnackbar}
							className='custom-btn'
						></Button>
					</div>
				</div>
			</div>
		</div>
	);
}
