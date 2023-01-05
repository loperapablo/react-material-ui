import { useState } from 'react';
import {
	IconButton,
	Stack,
	TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
	const { setinputUser } = props;

	const [valueInput, setValueInput] =
		useState('');

	const onSearchValueChange = (event) => {
		const inputValue = event.target.value;
		setValueInput(inputValue);
	};

	const handleSubmit = () => {
		setinputUser(valueInput);
	};

	const estilos = {
		marginTop: '30px',
		width: '80%',
	};
	const styleTextField = {
		width: '90%',
		margin: '0 auto',
	};

	return (
		<Stack direction='row' sx={estilos}>
			<TextField
				sx={styleTextField}
				type='search'
				autoComplete='off'
				label='Github User'
				id='outlined-basic'
				placeholder='Octocat'
				value={valueInput}
				onChange={onSearchValueChange}
				InputProps={{
					endAdornment: (
						<IconButton onClick={handleSubmit}>
							<SearchIcon />
						</IconButton>
					),
				}}
			/>
		</Stack>
	);
};

export default Searcher;
