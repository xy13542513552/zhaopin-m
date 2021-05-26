import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/jobseeker',
    name:'jobseeker',
    component: () => import('../views/home/issue/jobseeker.vue'),
  },
  {
    path:'/particulars',
    name:"particulars",
    component:()=>import('../views/home/particulars/index.vue'),
  },
  {
    path: '/recruitment',
    name:'recruitment',
    component: () => import('../views/home/issue/recruitment.vue'),
  },
  {
    path:'/picture0',
    name:'picture0',
    component:()=>import('../views/picture/picture0.vue')
  },
  {
    path:'/picture1',
    name:'picture1',
    component:()=>import('../views/picture/picture1.vue')
  },
  {
    path:'/picture2',
    name:'picture2',
    component:()=>import('../views/picture/picture2.vue')
  },
  {
    path:'/service',
    name:'service',
    component:()=>import('../views/service/index.vue')
  },
  {
    path:'/complaint',
    name:'complaint',
    component:()=>import('../views/service/complaint.vue')
  },
  {
    path:'/location',
    name:'location',
    component:()=>import('../views/location/index.vue')
  },
  {
    path:'/wodeqianbao',
    name:'wodeqianbao',
    component:()=>import('../views/my/wodeqianbao')
  },
  {
    path:'/shimingrenzheng',
    name:'shimingrenzheng',
    component:()=>import('../views/my/shimingrenzheng')
  },
  {
    path:'/guanyuwomen',
    name:'guanyuwomen',
    component:()=>import('../views/my/guanyuwomen')
  },
  {
    path:'/chakangengduo',
    name:'chakangengduo',
    component:()=>import('../views/my/chakangengduo')
  },
  {
    path:'/chongzhi',
    name:'chongzhi',
    component:()=>import('../views/my/wodeqianbao/chongzhi/index')
  },
  {
    path:'/jilv',
    name:'jilv',
    component:()=>import('../views/my/wodeqianbao/jilv/index')
  },
  {
    path:'/zhangdan',
    name:'zhangdan',
    component:()=>import('../views/my/wodeqianbao/zhangdan/index')
  },
  {
    path:'/xianyi',
    name:'xianyi',
    component:()=>import('../views/login/xianyi/index')
  },
  {
    path: '/user-for',
    name: 'user-for',
    component: () => import('@/views/user-for')
  },
  {
    path:'/look',
    name:'look',
    meta:{
      tx:1,
    },
    component:()=>import('../views/look/index.vue')
  },
  {
    path:'/searCh',
    name:'searCh',
    component:()=>import('../views/home/search.vue')
  },
  {
    path: '/',
    // name: 'layout', // 如果父路由有默认子路由，那它的 name 没有意义
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // 默认子路由，只能有1个
        name: 'home',
        meta:{
          tx:2,
        },
        component: () => import('@/views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
