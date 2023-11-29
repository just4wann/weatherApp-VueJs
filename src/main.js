import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

library.add(faCloud);

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app');
