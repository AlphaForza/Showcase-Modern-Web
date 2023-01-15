import React from 'react';
import Feedback from '../components/Feedback';

import Header from '../components/Header';
import Packaged from '../components/Packaged';
import PowerfulSection from '../components/PowerfulSection';
import Work from '../components/Work';
function Home() {
	return (
		<>
			<Header />
			<PowerfulSection />
			<Work />
			<Packaged />
			<Feedback />
		</>
	);
}

export default Home;
