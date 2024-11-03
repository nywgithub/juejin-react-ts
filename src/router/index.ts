import { Login, Home, Content, OlTest } from "@/views/router"

export type RouterType = {
  path: string
  component: React.LazyExoticComponent<any>
  exact?: boolean
  requiresAuth?: Boolean
  routes?: RouterType
}[]

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
const OlTestRouter: RouterType = {
    path: "/ol",
    component: OlTest,
    root: [],
}
// 总路由
const Routers: RouterType[] = [
    LoginRouter,
    HomeRouter,
    ContentRouter,
    OlTestRouter,
]

export { routes, renderRoutes }
