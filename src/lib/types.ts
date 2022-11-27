export interface GeolocationResponse {
	geolocation: boolean;
	lat?: number;
	long?: number;
	reason?: GeolocationErrorType;
};

export interface GeolocationWeatherData extends GeolocationResponse {
	weather?: WeatherInformation;
}

export type GeolocationErrorType = 'support' | 'permission' | 'timeout' | 'position_unavailable';

export interface WeatherInformation {
	name: string;
	weather: WeatherDescription[];
	main: {
		temp: number;
	};
	wind: {
		speed: number;
		deg: number;
	}
}

export type WeatherDescription = {
	id: number;
	main: string;
	description: string;
	icon: string;
};
