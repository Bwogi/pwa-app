import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

function App() {
	const [query, setQuery] = useState('');

	// search for value in input
	const search = async (e) => {
		// if the key entered is the enter key?
		if (e.key === 'Enter') {
			// then search for the value in the text box
			const data = await fetchWeather(query);
			console.log(data);
		}
	};

	return (
		<div className='main-container'>
			<h1 style={{ color: 'white', marginBottom: '10px' }}>PWA Weather App</h1>
			<input
				className='search'
				placeholder='Search...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type='text'
				onKeyPress={search}
			/>
		</div>
	);
}

export default App;
