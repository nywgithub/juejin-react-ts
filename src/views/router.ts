// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login'))
const Home = lazy(() => import('./home'))
const Content = lazy(() => import('./content'))

export {
    Login,
    Home,
    Content
}