import React from 'react';
import Header from './Components/header/Header';
import Navigation from './Components/navigation/Navigation';
import IntroBody from './Components/introbody/IntroBody';
import InformationBody from './Components/informationbody/InformationBody';

function App() {
	return (
		<React.Fragment>
			<Navigation />
			<Header />
			<IntroBody />
			<InformationBody />
		</React.Fragment>
	);
}

export default App;
