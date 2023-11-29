<script setup>
import { ref } from 'vue';
import { UTCConverter } from '../utils/utcConverter';

const props = defineProps({
  weatherFetchData: Object,
});

const dataComponent = ref([
  {
    id: 1,
    name: 'Wind',
    value: `${props.weatherFetchData?.wind.speed} mph`,
    icon: 'src/assets/icons/weather/wind (1).png',
  },
  {
    id: 2,
    name: 'Humidity',
    value: `${props.weatherFetchData?.main.humidity} %`,
    icon: 'src/assets/icons/weather/humidity (1).png',
  },

  {
    id: 3,
    name: 'Sunset',
    value: UTCConverter(props.weatherFetchData?.sys.sunset),
    icon: 'src/assets/icons/weather/sunset (1).png',
  },
  {
    id: 4,
    name: 'Sunrise',
    value: UTCConverter(props.weatherFetchData?.sys.sunrise),
    icon: 'src/assets/icons/weather/sunrise (1).png',
  },
  {
    id: 5,
    name: 'Pressure',
    value: `${props.weatherFetchData?.main.pressure} hpa`,
    icon: 'src/assets/icons/weather/pressure.png',
  },
]);
console.log(dataComponent.value);
</script>
<template>
  <div class="wrapper">
    <div v-for="data of dataComponent" class="card">
      <div class="title">
        <p>{{ data.name }}</p>
        <img :src="data.icon" :alt="data.name" class="icon" />
      </div>
      <p class="value">{{ data.value }}</p>
    </div>
  </div>
</template>
