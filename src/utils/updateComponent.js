import { ref } from 'vue';

export const numKey = ref(0);

export const updateComponent = () => {
  numKey.value++;
};
