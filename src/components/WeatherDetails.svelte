<script lang="ts">
	import type { WeatherInformation } from '$lib/types';

	export let weather: WeatherInformation;
	const current = weather.weather[0];
	const { name, main, wind } = weather;
</script>

<div class="card card-compact max-w-3xl w-auto">
	<figure>
		<img
			src="https://openweathermap.org/img/wn/{current.icon}@4x.png"
			alt={current.main}
			class="object-scale-down"
			width="400"
			height="400"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{current.description} !</h2>
		<button class="btn btn-disabled rounded-none gap-1 btn-sm w-96" name="city">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				class="stroke-current fill-current flex-shrink-0 h-6 w-6"
			>
				<path
					d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
				/></svg
			>
			<div class="badge badge-ghost">{name}</div>
		</button>
		<div class="flex flex-row flex-wrap w-96 justify-center btn btn-disabled">
			<button class="btn btn-disabled rounded-none btn-sm" name="temperature">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					class="stroke-current fill-current flex-shrink-0 h-6 w-6"
				>
					<path
						d="M160 64c-26.5 0-48 21.5-48 48v164.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112v164.5c0 .1.1.3.2.6.2.6.8 1.6 1.7 2.8 18.9 24.4 30.1 55 30.1 88.1 0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1.9-1.2 1.5-2.2 1.7-2.8.1-.3.2-.5.2-.6V112zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V200c0-8.8 7.2-16 16-16s16 7.2 16 16v122.7c18.6 6.6 32 24.4 32 45.3z"
					/></svg
				>
				<div class="badge badge-accent">{main.temp}°</div>
			</button>
			<button class="btn btn-disabled rounded-none gap-2 btn-sm" name="wind">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="stroke-current fill-current flex-shrink-0 h-6 w-6"
				>
					<path
						d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
					/></svg
				>
				<div class="badge badge-info">{wind.speed} m/s</div>
			</button>
		</div>
		<div class="w-96">
			<a class="relative btn btn-accent w-full my-4" href="/search"> search for a city → </a>
		</div>
	</div>
</div>
