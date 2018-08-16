// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  router,
  components: { App },
  template: '<App/>'
})

window.mountApp = () => {
  app.$mount('#app')
}
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp()
  }
} else {
  window.mountApp()
}
