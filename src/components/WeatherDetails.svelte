<script lang="ts">
  import type { WeatherDescription } from "$lib/types";

  export let weather: WeatherDescription;
</script>
<div class="card card-compact w-96">
  <figure><img src="https://openweathermap.org/img/wn/{weather.icon}@4x.png" alt="Shoes" /></figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{weather.main} !</h2>
    <p>{ weather.description }</p>
  </div>
</div>
