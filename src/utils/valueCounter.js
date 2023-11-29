import { ref } from 'vue';

export const tempValueCounter = ref(0);
export const feelsLikeValueCounter = ref(0);
export const counterValue = ([variable1, variable2], [value1, value2]) => {
  let start = 0;
  const stop = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - stop > 1000) {
      clearInterval();
      return;
    }
    variable1.value = start++;
    variable2.value = start++;
  }, 25);
  setTimeout(() => {
    variable1.value = Math.round(value1 / 10);
    variable2.value = Math.round(value2 / 10);
  }, 1000);
};
