import {
  Login,
  Home,
  Content,
} from '@/views/router'

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean,
}

const LoginRouter: RouterType = {
  path: '/Login',
  component: Login,
  root: [],
}
const HomeRouter: RouterType = {
  path: '/main',
  component: Home,
  root: [],
}
const ContentRouter: RouterType = {
  path: '/content',
  component: Content,
  root: [],
}
// 总路由
const Routers: RouterType[] = ([
  LoginRouter,
  HomeRouter,
  ContentRouter
])

export {
  Routers
}