<script setup>
import { ref, computed } from 'vue';
import { API_KEY, BASE_URL } from './constants';
import { setWeatherIcon, setCountryIcon, weatherIcon, countryIcon } from './utils/setIcon';
import { updateComponent, numKey } from './utils/updateComponent';
import { counterValue, tempValueCounter, feelsLikeValueCounter } from './utils/valueCounter';
import ButtonSearch from './components/Button.vue';
import CurrentCondition from './components/CurrentCondition.vue';
import DateAndTime from './components/DateAndTime.vue';
import LocationInfo from './components/LocationInfo.vue';
import Highlights from './components/Highlights.vue';

const isError = computed(() => weatherData.value.cod !== 200);
const weatherData = ref(null);
const city = ref('');

const getWeather = async () => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}`);
    const data = await response.json();
    weatherData.value = data;
    utilityFunction();
  } catch (err) {
    isError.value = true;
  }
};

const utilityFunction = () => {
  setWeatherIcon(weatherData.value.weather[0].main);
  counterValue([tempValueCounter, feelsLikeValueCounter], [weatherData.value.main.temp, weatherData.value.main.feels_like]);
  setCountryIcon(weatherData.value.sys.country);
  updateComponent();
  console.log(weatherData.value);
};
</script>

<template>
  <main>
    <div class="main-content">
      <div class="left-content">
        <div class="wrapper-left">
          <section class="search-bar">
            <input type="text" class="search-field" v-model="city" />
            <ButtonSearch @weatherLocation="getWeather()" />
          </section>
          <section class="temp-info" v-if="weatherData">
            <CurrentCondition :weatherFetchData="weatherData" :setImageWeather="weatherIcon" />
            <DateAndTime />
          </section>
          <section class="location-name" v-if="weatherData">
            <LocationInfo :weatherFetchData="weatherData" :countryIcon="countryIcon" />
          </section>
        </div>
      </div>
      <div class="right-content">
        <div class="wrapper-right">
          <Transition mode="out-in">
            <Highlights :weatherFetchData="weatherData" :key="numKey" v-if="weatherData" />
          </Transition>
        </div>
      </div>
    </div>
  </main>
</template>
