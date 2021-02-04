import Vue from 'vue'
// import Home from "@/views/Home"
// import Dog from "@/views/Dog"
// import File from "@/views/File"
// import Gat from "@/views/Gat"
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Servicios',
  //   component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  // }
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Home.vue'),
    props: true
  },
  {
    path: '/gat',
    name: 'Gat',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Gat.vue'),
    props: true
  },
  {
    path: '/dog',
    name: 'Dog',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Dog.vue'),
    props: true
  },
  {
    path: '/file',
    name: 'File',
    component: () => import(/* webpackChunkName: "editar" */ '../views/File.vue'),
    props: true
  },
  {
    path: '/filee',
    name: 'Filee',
    component: () => import(/* webpackChunkName: "editar" */ '../views/File2.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "editar" */ '../components/Login.vue'),
    props: true
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
