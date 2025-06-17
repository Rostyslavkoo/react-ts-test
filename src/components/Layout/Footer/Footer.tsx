import './Footer.css';
export default function Footer() {
	return (
		<div className='my-footer'>
			<div className='my-container'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} My Application. All rights reserved.
				</p>
				<p className='text-xs mt-2'>Built with React</p>
			</div>
		</div>
	);
}
