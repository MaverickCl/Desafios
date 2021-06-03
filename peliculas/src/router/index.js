import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Movies',
    component: () => import(/* webpackChunkName: "movies" */ '../views/Movies.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
  },
  {
    path: '/Movies_best',
    name: 'Movies_best',
    component: () => import(/* webpackChunkName: "Movies_best" */ '../views/Movies_best.vue')
  },
  {
    path: '/alert/:id',
    name: 'Alert',
    component: () => import(/* webpackChunkName: "alert" */ '../views/Alert.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
