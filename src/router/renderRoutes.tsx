import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
/* 
  authed: 用户是否有权限
  authPath: 验证失败跳转页面:登录页 
*/
const renderRoutes = (routes, authed: boolean, authPath:string = '/Login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null
export default renderRoutes

