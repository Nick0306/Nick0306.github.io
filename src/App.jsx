import React from 'react';
import Header from './Components/header/Header';
import Navigation from './Components/navigation/Navigation';
import IntroBody from './Components/introbody/IntroBody';

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<Header />
			<IntroBody />
		</React.Fragment>
	);
}

export default App;
