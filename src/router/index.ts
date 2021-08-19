import {
  Login,
  System,
} from '@/views/router'

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}

const HomeRouter: RouterType = {
  path: '/home',
  component: Login,
  root: [],
}
const StstemRouter: RouterType = {
  path: '/system',
  component: System,
  root: [],
}
// 总路由
const Routers: RouterType[] = ([
  HomeRouter,
  StstemRouter,
])

export {
  Routers
}