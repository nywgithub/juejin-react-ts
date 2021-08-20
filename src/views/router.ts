// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login/login'))
const Home = lazy(() => import('./home'))

export {
    Login,
    Home
}