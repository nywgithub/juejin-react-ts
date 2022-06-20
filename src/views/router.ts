// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login'))
const Home = lazy(() => import('./home'))
const Content = lazy(() => import('./content'))
const Test = lazy(() => import('./Test'))
const Test2 = lazy(() => import('./Test2'))

export {
    Login,
    Home,
    Content,
    Test,
    Test2
}