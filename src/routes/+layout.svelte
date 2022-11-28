<svelte:head>
	<meta charset="UTF-8">
  <meta name="description" content="Weather forecast for your current position or city">
  <meta name="keywords" content="Sveltekit, weather, forecast, openweathermap">
  <meta name="author" content="Khaled Ferjani<ferjani@pm.me>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">	
</svelte:head>

<script>
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import '../app.css';
	let loading = false;

	beforeNavigate(() => {
		loading = true;
	});

	afterNavigate(() => {
		loading = false;
	})
</script>
<div class="hero min-h-screen w-full items-center">
	<div class="text-center w-full">
		<div class="w-full">
			{#if loading}
				 <progress class="progress progress-accent w-96" />
			{:else}
				 <slot />
			{/if}
		</div>
	</div>
</div>
