import {
	Stack,
	Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import PaperInformation from '../../components/PaperInformation';
import LocationInformation from '../../components/LocationInformation';

const Description = (props) => {
	const { data } = props;
	const { bio } = data;
	return (
		<Fragment>
			<Stack sx={{ justifyContent: 'center' }}>
				<Typography variant='body1'>
					{bio ??
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
				</Typography>
			</Stack>
			<PaperInformation data={data} />
			<LocationInformation data={data} />
		</Fragment>
	);
};

export default Description;
