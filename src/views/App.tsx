import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Routers } from '@/router'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import Top from '@/views/top/Top'
function App() {
  return (
    <>
      <Layout>
        <Header>
          <Top />
        </Header>
        <Layout>
          <Content>
            <main>
              <Switch>
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
                <Redirect path="/" to="/main" />
              </Switch>
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
