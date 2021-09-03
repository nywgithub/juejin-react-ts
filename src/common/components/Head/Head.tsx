import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu } from '@CP/nav'
import Search from './search'
import Select from './select'
import Avator from './avator'
import Notice from './notice'
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
      <Link to="/creator" className="creator-link">
        <button
          className="ui-btn creator-btn secondary medium default"
        >
          创作者中心
        </button>
      </Link>
      <Select />
      <Avator />
      <Notice />
    </div>
  )
}

export default Head
