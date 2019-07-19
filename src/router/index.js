import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import About from '@/components/about/About'

//二级路由
import Contect from '@/components/about/Contect'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import Order from '@/components/about/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default:Home,
        'contect':Contect,
        'delivery':Delivery,
        'histroy':History,
    }},
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // beforeEnter:(to,from,next)=>{ //组件
      //   alert("sasi")
      //   next()  
      // }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children:[
        {path:'/about/contect',name:'Contect',component:Contect},
        {path:'/about/history',name:'History',component:History},
        {path:'/about/delivery',name:'Delivery',component:Delivery},
        {path:'/about/order',name:'Order',component:Order},
         
      ]

      
    },
    {path:'*',redirect:'/'}
  ],
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    //return{x:0,y:100}
    //return{selector:'.btn'}
  }
})
