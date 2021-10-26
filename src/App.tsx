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
	BrowserRouter,
	Switch,
	Route,
	Link as RouterLink
} from 'react-router-dom';

import pv157mid from './data/pv157-mid';
import pv157 from './data/pv157';
import About from './components/About';
import NotFound from './components/NotFound';
import Questions from './pages/Questions';
import theme from './theme';

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="fixed">
				<Container maxWidth="sm">
					<Toolbar disableGutters sx={{ gap: 2 }}>
						<Button component={RouterLink} to="/">
							Home
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
					<Route exact path="/" render={() => <Questions data={pv157mid} />} />
					<Route
						exact
						path="/secret"
						render={() => <Questions data={pv157} />}
					/>
					<Route exact path="/about" render={() => <About />} />

					<Route render={() => <NotFound />} />
				</Switch>
			</Container>
		</ThemeProvider>
	</BrowserRouter>
);
export default App;
