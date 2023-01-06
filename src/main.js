import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnimateOnScroll from 'vue-animate-onscroll'


Vue.use(VueAnimateOnScroll)
Vue.config.productionTip = false

//scss
import '@/assets/scss/main.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
