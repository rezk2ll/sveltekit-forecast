<script lang="ts">
	import type { GeolocationResponse, WeatherInformation } from '$lib/types';
	import WeatherDetails from '../components/WeatherDetails.svelte';
	import Unavailable from '../components/Unavailable.svelte';

	export let data: GeolocationResponse & { weather: WeatherInformation };
  const weather = data.weather?.weather?.[0];
</script>

<template>
	{#if !data.geolocation && data.reason}
    <Unavailable reason={data.reason} />
	{:else}
		<WeatherDetails {weather} />
	{/if}
</template>
