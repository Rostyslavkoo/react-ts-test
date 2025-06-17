import './Dropdown.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

interface DropdownProps {
	menu: string[];
	chosenColor?: string | null;
	setChosenColor: (color: string | null) => void;
}

export default function Dropdown({
	menu,
	chosenColor,
	setChosenColor,
}: DropdownProps) {
	const handleOpenDropdown = () => {
		setOpen(!open);
	};
	const menuRef = useOutsideClick(() => {
		setOpen(false);
	});

	const handleListItemClick = (item: string) => () => {
		setChosenColor(item);
		setOpen(false);
	};
	const [open, setOpen] = useState(false);
	return (
		<div className='my-dropdown'>
			<button onClick={handleOpenDropdown}>
				<div className='title__wrapper'>
					<div
						className='colorBox'
						style={{ background: chosenColor || 'transparent' }}
					></div>
					<span className='title'>
						{chosenColor ? chosenColor : 'Select a color'}
					</span>
				</div>
				<ArrowDropDownIcon
					className='icon'
					style={{ transform: `rotate(${open ? 180 : 0}deg)` }}
				/>
			</button>
			<ul ref={menuRef}>
				{open && (
					<>
						{menu.map((item, index) => (
							<li
								key={index}
								className='item'
								onClick={handleListItemClick(item)}
							>
								<div className='colorBox' style={{ background: item }}></div>
								<span className='title'>{item}</span>
							</li>
						))}
						{menu.length === 0 && (
							<li className='item'>
								<span className='title'>No items available</span>
							</li>
						)}
					</>
				)}
			</ul>
		</div>
	);
}
