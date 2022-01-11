import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '336e1dcb98751c018d9c7aea2e63c991';

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY,
		},
	});
	return data;
};
