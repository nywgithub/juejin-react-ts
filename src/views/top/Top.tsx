import React, { useState } from 'react'
import { NavMenu } from '@CP/nav'

const LIST = [
  {
    title: '首页',
    url: '/home',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
  {
    title: '登录',
    url: '/Login',
  },
]
function Top() {
  const [navData, setNavData] = useState(LIST)

  return <NavMenu list={navData} isHead={false} />
}
export default Top
