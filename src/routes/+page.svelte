<script lang="ts">
	import type { GeolocationWeatherData } from '$lib/types';
	import WeatherDetails from '../components/WeatherDetails.svelte';
	import Unavailable from '../components/Unavailable.svelte';
	import { prefetch } from '$app/navigation';

	export let data: GeolocationWeatherData;
	const { weather } = data;
	prefetch("/search");
</script>

<template>
	{#if !data.geolocation && data.reason}
    <Unavailable reason={data.reason} />
	{:else if weather}
		<WeatherDetails {weather} />
	{:else}
		<Unavailable reason="support" />
	{/if}
</template>
