import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';
import { FilterContext } from './../../context/filterContext';
import { SnackbarContext } from './../../context/snackbarContext';
import { useState } from 'react';
import SnackbarComponent from '../Snackbar/SnackbarComponent';

export default function Layout({ children }: { children: React.ReactNode }) {
	const [color, setColor] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [snackbars, setSnackbars] = useState<string[]>([]);

	return (
		<SnackbarContext.Provider value={{ snackbars, setSnackbars }}>
		<FilterContext.Provider
			value={{ color, setColor, searchQuery, setSearchQuery }}
		>
			<Header />
			<div className='my-layout flex flex-col min-h-screen'>
				<main>{children}</main>
				<Footer />
				<SnackbarComponent  />
			</div>
		</FilterContext.Provider>
		</SnackbarContext.Provider>
	);
}
