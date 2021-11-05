import React from 'react';
import DocumentationContextProvider from './context/DocumentationContext';
import Routes from './Routes';
import './App.css'
const App = () => {
	return (
		<div>
			<DocumentationContextProvider>
				<Routes />
			</DocumentationContextProvider>
		</div>
	);
};

export default App;