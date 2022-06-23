// 路由懒加载
import { lazy } from 'react'
import loadable from '@loadable/component'
import renderRoutes from './renderRoutes'
const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views//home'))
const Content = lazy(() => import('@/views/content'))
const Test = lazy(() => import('@/views/Test'))
const Test2 = lazy(() => import('@/views/Test2'))

export type RouterType = {
  path: string
  component: React.LazyExoticComponent<any>
  exact?: boolean
  requiresAuth?: Boolean
  routes?: RouterType
}[]

//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes: RouterType = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/main',
    component: Home,
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/content',
    component: Content,
  },
  {
    path: '/test',
    component: Test,
    routes: [
      //此处添加嵌套路由
      {
        path: '/test/son',
        component: Test2,
      },
    ],
  },
]

export { routes, renderRoutes }
