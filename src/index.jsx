import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/App'
import { HashRouter, Route, Switch } from 'react-router-dom'
//挂载 Mock
import './mock'
import './css'
ReactDOM.render(
  <HashRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => {
            return <App {...routerProps} />
          }}
        />
      </Switch>
    </Suspense>
  </HashRouter>,
  document.getElementById('root'),
)
