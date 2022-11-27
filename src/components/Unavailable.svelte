<script lang="ts">
	import type { GeolocationErrorType } from '$lib/types';

	export let reason: GeolocationErrorType;
</script>

<template>
	{#if reason === 'support'}
		<div class="alert alert-warning shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/></svg
				>
				<span>Geolocation is not available in your browser</span>
			</div>
			<div class="flex-none">
				<a class="btn btn-accent w-full my-4" href="/search"> search for a city → </a>
			</div>
		</div>
	{:else if reason === 'permission'}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>we don't have permission to get your position.</span>
			</div>
			<div class="flex-none">
				<a class="btn btn-accent w-full my-4" href="/search"> search for a city → </a>
			</div>
		</div>
	{:else if reason === 'timeout'}
		<div class="alert bg-slate-500 shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Timed out! we couldn't get your position in time</span>
				<div class="flex-none">
					<a class="btn btn-accent w-full my-4" href="/search"> search for a city → </a>
				</div>
			</div>
		</div>
	{:else if reason === 'position_unavailable'}
		<div class="alert alert-warning shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/></svg
				>
				<span>Hmmm your position is not available!</span>
			</div>
			<div class="flex-none">
				<a class="btn btn-accent w-full my-4" href="/search"> search for a city → </a>
			</div>
		</div>
	{/if}
</template>
