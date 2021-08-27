import React, { useState, useEffect } from 'react'
import { NavMenu, TopNav, TFC } from '@CP/nav'
import axios from 'axios'

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

function Top() {
  //TODO :
  //1.navData后续改为接口获取
  const [navData, setNavData] = useState([])
  const [popData, setPopData] = useState([])
  useEffect(() => {
    getClickList()
  }, [])
  var getClickList: TFC = (title?: string, e?: any) => {
    axios({
      url: '/getinfo',
      method: 'get',
    }).then((res) => {
      setNavData(res.data.list)
    })
  }
  var getHoverList: TFC = (title) => {
    axios({
      url: '/getinfo',
      method: 'get',
    }).then((res) => {
      setPopData(res.data.list)
    })
  }

  return (
    <>
      <TopNav
        list={TOPLIST}
        getClickList={(title, e) => {
          getClickList(title, e)
        }}
        getHoverList={(title) => {
          getHoverList(title)
        }}
      >
        <NavMenu list={popData} isHead />
      </TopNav>
      <NavMenu list={navData} isHead={false} />
    </>
  )
}
export default Top
