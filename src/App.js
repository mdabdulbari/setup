import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import './firebaseui-styling.global.css'
import './App.css';
import Routes from './Routes';
import { AuthProvider } from './helpers/Auth';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['"Open Sans"', "sans-serif"],
		useNextVariants: true,
		fontWeight: "bold"
	},
	palette: {
		primary: {
			main: "#1a73ba"
		},
		secondary: {
			main: "#b11c54"
		}
	}
});

class App extends React.Component {
	render() {
		return (
			<AuthProvider>
				<MuiThemeProvider theme={theme}>
					<Routes />
				</MuiThemeProvider>
			</AuthProvider>
		);
	}
}

export default App;