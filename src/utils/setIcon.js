import { ref } from 'vue';

export const weatherIcon = ref('');
export const countryIcon = ref('');

export const setWeatherIcon = (weatherCondition) => {
  if (weatherCondition === 'Clouds') {
    weatherIcon.value = 'src/assets/icons/weather/clouds.png';
  } else if (weatherCondition === 'Rain') {
    weatherIcon.value = 'src/assets/icons/weather/rainy (1).png';
  } else if (weatherCondition === 'Haze') {
    weatherIcon.value = 'src/assets/icons/weather/haze.png';
  } else if (weatherCondition === 'Drizzle') {
    weatherIcon.value = 'src/assets/icons/weather/drizzle.png';
  }
};

export const setCountryIcon = (currentCountry) => {
  currentCountry == 'ID' ? (countryIcon.value = 'src/assets/icons/country/id.png') : (countryIcon.value = '');
};
