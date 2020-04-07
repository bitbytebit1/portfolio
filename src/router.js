import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Container.vue'
import Matrix from './views/Matrix.vue'
import Deepspacebyte from './views/Deepspacebyte.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/matrix',
      name: 'matrix',
      component: Matrix
    },
    {
      path: '/deepspacebyte',
      name: 'deepspacebyte',
      component: Deepspacebyte
    }
  ]
})
