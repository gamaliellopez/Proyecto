import Vue from 'vue'
import Home from "@/views/Home"
import Dog from "@/views/Dog"
import File from "@/views/File"
import Gat from "@/views/Gat"
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Servicios',
  //   component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  // }
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dog",
    name: "dog",
    component: Dog
  },
  {
    path: "/gat",
    name: "gat",
    component: Gat
  },
  {
    path: "/file",
    name: "file",
    component: File
  },
  {
    path: "*",
    name: "error",
    component: Error
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
