import Vue from 'vue';
import App from './App.vue';
import SideBar from './components/SideBar.vue';
import Top from './components/Top.vue';
import Footer from './components/Footer.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('sidebar', SideBar);
Vue.component('top', Top);
Vue.component('vue-footer', Footer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
