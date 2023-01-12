import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Translate
import { languages } from './i18n'

const messages = Object.assign(languages)
const i18n = new VueI18n({
  locale: localStorage.getItem("lang"),
  messages,
})


Vue.use(VueAnimateOnScroll)
Vue.config.productionTip = false

//scss
import '@/assets/scss/main.scss'

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
