import React from 'react'
import { Redirect, Route, Switch, withRouter, Link } from 'react-router-dom'
import { routes } from '@/router'
// import { renderRoutes } from "react-router-config";
import { renderRoutes } from '@/router'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import Head from '@/common/components/Head/Head'
const authed = false // 如果登陆之后可以利用redux修改该值
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置
function App() {
  return (
    <>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Layout>
          <Content>
            <Link to="/test">1</Link>
            <Link to="/test/son">2</Link>
            <main>
              {/* <Switch>标签会渲染将匹配URL的第一个<Route>进行渲染，如果最前面的<Route>匹配了，
              后面的就不会渲染，所以对于path="/"的<Route>应该放在最后面，<Switch>相当于js里的switch */}
              {/* <Switch>
                {Routers.map((router) => (
                  <Route
                    exact={!router.notExect}
                    key={router.path}
                    path={router.path}
                    component={router.component}
                  ></Route>
                ))}
                {/* 设置默认路由 推荐方法一*/}
              {/* 方法一 */}
              {/* <Route path="/" component={Home} exact></Route> */}
              {/* 方法二 重定向*/}
              {/* <Redirect path="/" to="/main" />
              </Switch> */}
              {renderRoutes(routes, authed, authPath)}
              <Redirect path="/" to="/main" />
            </main>
          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default withRouter(App)
