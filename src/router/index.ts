import {
  Login,
  Home,
} from '@/views/router'

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}

const HomeRouter: RouterType = {
  path: '/Login',
  component: Login,
  root: [],
}
const MainRouter: RouterType = {
  path: '/main',
  component: Home,
  root: [],
}
// 总路由
const Routers: RouterType[] = ([
  HomeRouter,
  MainRouter,
])

export {
  Routers
}