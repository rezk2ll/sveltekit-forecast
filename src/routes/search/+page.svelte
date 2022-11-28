<script lang="ts">
	import { enhance } from '$app/forms';
	import WeatherDetails from '../../components/WeatherDetails.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let loading = false;
</script>

<svelte:head>
	<title>Search for a city</title>
</svelte:head>

<div class="flex justify-center w-full">
	{#if form?.data}
		<WeatherDetails weather={form?.data} />
	{:else}
		<div class="card card-compact w-auto">
			<div class="card-body items-center text-center">
				{#if loading}
					<progress class="progress progress-accent w-96" />
				{:else}
					<form
						action="?/search"
						class="form-control"
						use:enhance={() => {
							loading = true;

							return async ({ update }) => {
								await update();
								loading = false;
							};
						}}
					>
						<div class="input-group w-96">
							<input
								required={true}
								type="text"
								name="city"
								placeholder="type a city name"
								class="input w-full input-md input-accent input-bordered focus:ring-0 focus:ring-offset-0"
							/>
							<button class="btn btn-square btn-accent">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/></svg
								>
							</button>
						</div>
					</form>
				{/if}
				{#if form?.not_found && !loading}
					<div class="alert alert-warning shadow-lg w-auto">
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
							<span>can't find the city you are looking for, try another</span>
						</div>
					</div>
				{:else if form?.failed && !loading}
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
							<span>failed to get the weather for this city, try again maybe?</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
