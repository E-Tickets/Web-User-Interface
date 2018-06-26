// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = '/api'

// custom vue zhiling
Vue.directive('input', {
  bind (el, binding, vnode) {
    el.onfocus = () => {
      el.value = ''
      console.log(el, binding)
      if (binding.expression === 'password') {
        el.setAttribute('type', 'password')
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
