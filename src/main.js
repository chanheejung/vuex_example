import Vue from 'vue'
import App from './App.vue'
// store.js 를 불러와
import { store } from './store'

new Vue({
  el: '#app',
  // Vue 인스턴스에 등록한다.
  store,
  render: h => h(App)
})
