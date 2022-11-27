export interface GeolocationResponse {
	geolocation: boolean;
	lat?: number;
	long?: number;
	reason?: GeolocationErrorType
};

export type GeolocationErrorType = 'support' | 'permission' | 'timeout' | 'position_unavailable';

export interface WeatherInformation {
	name: string;
	weather: WeatherDescription[];
}

export type WeatherDescription = {
	id: number;
	main: string;
	description: string;
	icon: string;
};
