import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import NotFound from './components/404'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    component : LogTime,
  }]
},{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  routes
});

var app = new Vue({
  el: '#app',
  router,
  store,  // 通过在根实例中注册 store 选项，该 store 实例会被注入到根组件下的所有子组件中，并且子组件可以通过 this.$store 来访问
  ...App,
});
