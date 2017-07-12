// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './components/users'
import Hello from './components/Hello'
import Users from './App'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {path:'/', component: Users},
    {path:'/hello', component: Hello}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `<div id = "app">
      <ul>
        <li><router-link to ="/">Users</router-link></li>
          <li><router-link to ="/hello">Hello</router-link></li>

      </ul>
      <router-view></router-view>
      </div>
  `,
}).$mount('#app')
