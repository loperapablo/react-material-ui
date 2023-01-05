import {
	CardMedia,
	Grid,
	Stack,
} from '@mui/material';
import React from 'react';
import PrincipalInformation from '../../components/PrincipalInformation';
import Description from '../Description';

const UserCard = (props) => {
	const { data } = props;

	return (
		<Grid
			container
			spacing={2}
			sx={{
				marginTop: '15px',
			}}
		>
			<Grid item xs={3}>
				<CardMedia
					component='img'
					alt='GitHub User'
					image={data?.avatar_url}
					sx={{
						borderRadius: '50%',
						marginLeft: '10px',
					}}
				/>
			</Grid>
			<Grid item xs={9}>
				<Stack
					direction='column'
					spacing={1}
					sx={{ margin: '30px' }}
				>
					<PrincipalInformation data={data} />
					<Description data={data} />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default UserCard;
