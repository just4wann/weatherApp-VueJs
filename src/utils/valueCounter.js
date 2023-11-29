import { ref } from 'vue';

export const tempValueCounter = ref(0);
export const humValueCounter = ref(0);
export const windValueCounter = ref(0);
export const pressValueCounter = ref(0);

export const counterValue = async (variable, value) => {
  let start = 0;
  const stop = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - stop > 1000) {
      clearInterval();
      return;
    }
    variable.value = start++;
  }, 25);
  setTimeout(() => {
    variable.value = value;
  }, 1000);
};
