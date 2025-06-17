import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';
import { FilterContext } from './../../context/filterContext';
import {useState} from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
		const [chosenColor, setColor] = useState<string | null>(null);
	
	return (
		<FilterContext.Provider
			value={{ color: chosenColor, setColor: (color: string | null) => {} }}
		>
			<Header />
			<div className='my-layout flex flex-col min-h-screen'>
				<main>{children}</main>
				<Footer />
			</div>
		</FilterContext.Provider>
	);
}
