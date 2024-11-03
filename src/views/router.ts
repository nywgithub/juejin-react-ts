// 路由懒加载
import { lazy } from 'react'

const Login = lazy(() => import('./login'))
const Home = lazy(() => import('./home'))
const Content = lazy(() => import('./content'))
const OlTest = lazy(() => import("./OlTest"))



export { Login, Home, Content, OlTest }