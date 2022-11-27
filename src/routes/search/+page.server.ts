import { error, invalid } from '@sveltejs/kit';
import type { Actions } from './$types';
import { WEATHER_API_KEY } from '$env/static/private';

export const actions: Actions = {
	search: async ({ request, fetch }) => {
		const data = await request.formData();
		const city = data.get('city');

		console.debug(city);

		if (!city) {
			return invalid(400, { city });
		}

		try {
			const citySearchResponse = await fetch(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`
			);

			const [cityInfo] = await citySearchResponse.json();

			if (!cityInfo || !cityInfo.lon || !cityInfo.lat) {
				return invalid(404, { city, not_found: true });
			}

      const { lat, lon } = cityInfo;

			const weatherResponse = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
			);

      const weather = await weatherResponse.json();

      if (!weather) {
        return invalid(500, { city, failed: true })
      }

			return {
				data: weather
			};
		} catch (err) {
			throw error(500, { message: 'failed to search for city' });
		}
	}
};
