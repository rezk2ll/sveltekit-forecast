import { error } from "@sveltejs/kit";
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { geolocation, lat = 0, long = 0 } = await parent();

	if (!geolocation) {
		return {};
	}

	try {
		const response = await fetch(`/weather/${long}/${lat}`);

    return {
			weather: response.json()
		};
	} catch (err) {
		throw error(500, 'failed to fetch weather');
	}
};
