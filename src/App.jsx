import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import { useState, useEffect } from 'react';
import { getGithubUser } from './services/users';
import UserCard from './containers/UserCard';

function App() {
	const [inputUser, setinputUser] =
		useState('octocat');
	const [notFound, setNotFound] =
		useState(false);
	const [data, setdata] = useState(inputUser);

	useEffect(() => {
		searchInfoUser(inputUser);
	}, [inputUser]);

	const searchInfoUser = async (user) => {
		try {
			const userResponse = await getGithubUser(
				user
			);

			setdata(userResponse);
			if (
				userResponse.message === 'Not Found'
			) {
				setNotFound(true);
			} else {
				setNotFound(false);
				setdata(userResponse);
			}
		} catch (error) {
			console.log(error);
			setNotFound(true);
		}
	};

	return (
		<Container
			sx={{
				background: 'whitesmoke',
				width: '80vw',
				height: '500px',
				borderRadius: '16px',
				marginTop: '40px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Searcher setinputUser={setinputUser} />
			<UserCard data={data} />
			{/* {notFound ? (
				<>No encontrado</>
			) : (
				<>Encontrado</>
			)} */}
		</Container>
	);
}

export default App;
