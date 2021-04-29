import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import modal from '../components/modal.vue';
import profile from '../components/profile.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/modal',
    name:'modal',
    component:modal
  },
  {
    path:'/profile',
    name: 'profile',
    component:profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
