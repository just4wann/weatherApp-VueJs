<script setup>
import { tempValueCounter } from '../utils/valueCounter';
const props = defineProps({
  weatherFetchData: Object,
  setImageWeather: String,
});
// const temp = props.weatherFetchData?.main.temp;
// counterValue(tempValueCounter, temp);
</script>

<template>
  <div class="wrapper-temp">
    <img :src="setImageWeather" :alt="setImageWeather" class="icon-weather" />
    <div class="temp-text">
      <p class="temp">{{ tempValueCounter }}<span class="celcius">°C</span></p>
      <p class="weather">{{ weatherFetchData?.weather[0].main }}</p>
    </div>
  </div>
</template>
