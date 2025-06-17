import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';
import { FilterContext } from './../../context/filterContext';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	const [color, setColor] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<FilterContext.Provider
			value={{ color, setColor, searchQuery, setSearchQuery }}
		>
			<Header />
			<div className='my-layout flex flex-col min-h-screen'>
				<main>{children}</main>
				<Footer />
			</div>
		</FilterContext.Provider>
	);
}
