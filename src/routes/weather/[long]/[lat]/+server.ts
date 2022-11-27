import type { RequestHandler } from './$types';
import { WEATHER_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const { long, lat } = params;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`;
	try {
		const response = await fetch(url);

		return response;
	} catch (err) {
		throw error(500, 'failed to fetch weather');
	}
};
