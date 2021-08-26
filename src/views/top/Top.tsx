import React, { useState } from 'react'
import { NavMenu, TopNav } from '@CP/nav'

const TOPLIST = [
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
const NAVLIST = [
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
function Top() {
  //TODO :
  //1.navData后续改为接口获取
  const [topData, setTopData] = useState(TOPLIST)
  const [navData, setNavData] = useState(NAVLIST)

  return (
    <>
      <TopNav list={topData}>
         <NavMenu list={navData} isHead={false} />
      </TopNav>
      <NavMenu list={navData} isHead={false} />
    </>
  )
}
export default Top
