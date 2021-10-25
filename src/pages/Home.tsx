import { Box, Button, Typography } from '@mui/material';
import GridOnIcon from '@mui/icons-material/GridOn';
import { Link } from 'react-router-dom';

type Props = {
	username?: string;
};

const Home = ({ username }: Props) => (
	<>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<GridOnIcon
				sx={{
					color: 'primary.main',
					fontSize: '24rem',
					mixBlendMode: 'difference'
				}}
			/>
			<Typography variant="h1" fontWeight="bolder">
				Tic Tac Toe
			</Typography>
		</Box>
		{username && (
			<Typography variant="h4" textAlign="center">
				Welcome, {username}!
			</Typography>
		)}
		<Button component={Link} to="/play" variant="outlined">
			Let&apos;s start
		</Button>
	</>
);

export default Home;
