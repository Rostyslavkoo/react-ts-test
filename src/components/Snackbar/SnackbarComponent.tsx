import './SnackbarComponent.css';
import Snackbar from '../Layout/components/Snackbar/Snackbar';
import { SnackbarContext } from '../../context/snackbarContext';
import { useContext, useEffect } from 'react';

export default function SnackbarComponent() {
	const snackbarContextValue = useContext(SnackbarContext);

	useEffect(() => {
		const snackbarSize = 60;
		const maxSnackbarsLength = Math.floor(
			(window.innerHeight - 200) / snackbarSize
		);
		if ((snackbarContextValue?.snackbars?.length ?? 0) > maxSnackbarsLength) {
			snackbarContextValue?.setSnackbars?.(prev => prev.slice(1));
		}
	}, [snackbarContextValue]);

	useEffect(() => {
		const timer = setTimeout(() => {
			snackbarContextValue?.setSnackbars?.(prev => prev.slice(1));
		}, 2000);

		return () => clearTimeout(timer);
	}, [snackbarContextValue]);

	if (!snackbarContextValue) {
		return null;
	}

	const { snackbars, setSnackbars } = snackbarContextValue || {};
	if (!snackbars || !setSnackbars) return null;

	return (
		<div className='my-snackbar-component'>
			{[...snackbars].reverse().map((msg, index) => (
				<Snackbar
					key={index}
					message={msg}
					style={{
						transform: `translate(-50%,-${index * 70}px)`,
					}}
				/>
			))}
		</div>
	);
}
