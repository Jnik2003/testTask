import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import directives from './directives'
directives.forEach(item => {
  Vue.directive(item.name, item)
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
