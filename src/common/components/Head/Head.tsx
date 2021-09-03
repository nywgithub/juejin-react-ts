import React, { useState, useEffect } from 'react'
import { NavMenu } from '@CP/nav'
import Search from './search'
const DATA = [
  {
    title: '首页',
    url: '/home',
  },
  {
    title: '前端',
    url: '/Login',
  },
  {
    title: '后端',
    url: '/Login',
  },
  {
    title: 'Android',
    url: '/Login',
  },
  {
    title: 'IOS',
    url: '/Login',
  },
  {
    title: '人工智能',
    url: '/Login',
  },
  {
    title: '代码人生',
    url: '/Login',
  },
  {
    title: '阅读',
    url: '/Login',
  },
]
const Head = () => {
  return (
    <div className="container">
      <a>
        <img src="" />
        <img src="" />
      </a>
      <NavMenu list={DATA} isHead />
      <Search />
    </div>
  )
}

export default Head
