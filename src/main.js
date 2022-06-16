import { createApp } from 'vue';
import VueGridLayout from 'vue-grid-layout';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

library.add(faCaretUp, faCaretDown);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueGridLayout)
  .mount('#app');
