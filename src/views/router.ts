// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login/login'))
const Main = lazy(() => import('./main/Main'))

export {
    Login,
    Main
}