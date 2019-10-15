import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyAlJWO_EjQxSsfpQ0rbkZZ631EyCdiL0aQ',
  authDomain: 'dummy-97659.firebaseapp.com',
  databaseURL: 'https://dummy-97659.firebaseio.com',
  projectId: 'dummy-97659',
  storageBucket: 'dummy-97659.appspot.com',
  messagingSenderId: '225556347485',
  appId: '1:225556347485:web:623b5ac4b13ead5a31abb4'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
