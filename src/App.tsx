import {
	AppBar,
	Box,
	Button,
	Container,
	CssBaseline,
	ThemeProvider,
	Toolbar
} from '@mui/material';
import {
	Switch,
	Route,
	Link as RouterLink,
	useLocation
} from 'react-router-dom';
import { useEffect } from 'react';

import pv157mid from './data/pv157-mid';
import pv157diff from './data/pv157diff';
import pv157 from './data/pv157';
import pa017 from './data/pa017';
import About from './components/About';
import NotFound from './components/NotFound';
import Questions from './pages/Questions';
import theme from './theme';

const App = () => {
	const location = useLocation();

	// useEffect(() => {
	// 	console.log(location);

	// 	localStorage.clear();
	// }, [location]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="fixed">
				<Container maxWidth="sm">
					<Toolbar disableGutters sx={{ gap: 2 }}>
						<Button component={RouterLink} to="/">
							Midterm
						</Button>
						<Button component={RouterLink} to="/pv157">
							Exam
						</Button>
						<Button component={RouterLink} to="/pv157-diff">
							Diff
						</Button>
						<Button component={RouterLink} to="/about">
							About
						</Button>
						<Box sx={{ flexGrow: 1 }} />
					</Toolbar>
				</Container>
			</AppBar>

			<Container
				maxWidth="sm"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					// height: '100vh',
					pt: 9,
					gap: 2
				}}
			>
				<Switch>
					<Route key="pv157mid" exact path="/">
						<Questions data={pv157mid} />
					</Route>
					<Route key="pv157" exact path="/pv157">
						<Questions data={pv157} />
					</Route>
					<Route key="pv157diff" exact path="/pv157-diff">
						<Questions data={pv157diff} />
					</Route>

					<Route key="pa017" exact path="/secret">
						<Questions data={pa017} />
					</Route>
					<Route exact path="/about" render={() => <About />} />

					<Route render={() => <NotFound />} />
				</Switch>
			</Container>
		</ThemeProvider>
	);
};
export default App;
