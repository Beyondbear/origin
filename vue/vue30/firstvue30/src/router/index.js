import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [  //配置路由，这里是一个数组
  {                //每一个路由链接都是一个对象
    path: '/',   //链接路径：根路径，即第一条路由
    name: 'Home', //路由名称HOME
    component: Home //对应的组件模板，此处是../views/Home.vue
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由懒得加载，即路由被使用时才加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({  //创建路由实例
  history: createWebHashHistory(),// 创建history模式的路由
  routes    //上面定义配置路由的数组
})

export default router  //暴露路由
