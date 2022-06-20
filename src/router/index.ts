import {
  Login,
  Home,
  Content,
  Test2,
  Test
} from '@/views/router'

// export type RouterType = {
//   path: string,
//   component: React.LazyExoticComponent<any>,
//   root: string[],
//   notExect?: boolean,
// }

// const LoginRouter: RouterType = {
//   path: '/Login',
//   component: Login,
//   root: [],
// }
// const HomeRouter: RouterType = {
//   path: '/main',
//   component: Home,
//   root: [],
// }
// const ContentRouter: RouterType = {
//   path: '/content',
//   component: Content,
//   root: [],
// }
// const TestRouter: RouterType = {
//   path: '/test',
//   component: Test,
//   root: [],
// }
// const Test2Router: RouterType = {
//   path: '/test/son',
//   component: Test2,
//   root: [],
// }
// // 总路由
// const Routers: RouterType[] = ([
//   LoginRouter,
//   HomeRouter,
//   ContentRouter,
//   TestRouter,
//   Test2Router
// ])

//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/main",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/content",
    component: Content,
  },
  {
    path: "/test",
    component: Test,
    routes: [ //此处添加嵌套路由
      {
        path: "/test/son",
        component: Test2,
      },
    ],
  },
  
];

export {
  routes
}