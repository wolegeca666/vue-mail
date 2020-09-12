import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

const Class = () => import(/* webpackChunkName: "about" */ '../views/class/Class.vue');
const Cart = () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue');
const Mine = () => import(/* webpackChunkName: "about" */ '../views/mine/Mine.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
