import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import MainComponent from './components/MainComponent';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{/* <main>This app is using the dark mode</main> */}
			<BrowserRouter>
				<MainComponent />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
