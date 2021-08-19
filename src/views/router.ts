// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login/login'))
const System = lazy(() => import('./system/system'))

export {
    Login,
    System
}