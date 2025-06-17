import './TextField.css';
import { useState ,useEffect} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

interface TextFieldProps {
	setSearchQuery?: (query: string) => void;
}
export default function TextField({ setSearchQuery }: TextFieldProps) {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const clearInputValue = () => {
		setInputValue('');
	};
    useEffect(() => {
        if (setSearchQuery) {
            setSearchQuery(inputValue);
        }
    }, [inputValue, setSearchQuery]);

	return (
		<div className='my-textfield'>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Type here...'
			/>
			{inputValue && <ClearIcon onClick={clearInputValue} />}
		</div>
	);
}
