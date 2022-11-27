
import type { GeolocationErrorType, GeolocationResponse } from '$lib/types';
import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';

export const ssr = false;

const getLocation = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const load: LayoutLoad = async (): Promise<GeolocationResponse> => {
	if (!navigator.geolocation) {
		return {
			geolocation: false,
			reason: 'support'
		};
	}

	try {
		const position = await getLocation();
		const { coords } = position;

		return {
			geolocation: true,
			lat: coords.latitude,
			long: coords.longitude
		};
	} catch (error) {
		let reason: GeolocationErrorType = 'permission';

		switch ((error as GeolocationPositionError).code) {
			case 1:
				reason = 'permission';
				break;
			case 2:
				reason = 'position_unavailable';
				break;
			case 3:
				reason = 'timeout';
				break;
		}

		return {
			geolocation: false,
			reason
		};
	}
};
