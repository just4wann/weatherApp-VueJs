<script setup>
import { tempValueCounter, feelsLikeValueCounter } from '../utils/valueCounter';
const props = defineProps({
  weatherFetchData: Object,
  setImageWeather: String,
});
</script>

<template>
  <div class="wrapper-temp">
    <img :src="setImageWeather" :alt="setImageWeather" class="icon-weather" />
    <p class="temp">{{ tempValueCounter }}<span class="celcius">°C</span></p>
    <div class="temp-text">
      <p class="weather">{{ weatherFetchData?.weather[0].main }}</p>
      <p class="like">Feels Like {{ feelsLikeValueCounter }}<span class="celcius">°C</span></p>
    </div>
  </div>
</template>
