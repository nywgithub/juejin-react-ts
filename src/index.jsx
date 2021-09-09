import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/App'
import { HashRouter, Route, Switch,hashHistory } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@/redux/store'
//挂载 Mock
import './mock'
import './css'
ReactDOM.render(
  <HashRouter history={hashHistory}>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => {
            return <Provider store={store}><App {...routerProps} /></Provider>
          }}
        />
      </Switch>
    </Suspense>
  </HashRouter>,
  document.getElementById('root'),
)
