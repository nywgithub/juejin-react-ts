import React, { useState, useEffect } from 'react'
import { NavMenu, TopNav, TFC } from '@/common/components/nav'
import {getList} from  '@/axios/Top'
import './style/index.scss'
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
  const [navData, setNavData] = useState([])
  const [popData, setPopData] = useState([])
  useEffect(() => {
    getClickList()
  }, [])
  const getInfo = async () =>{
    let res = await getList()
    if(res.data.success){
      return res.data
    }
    
  }
  
  var getClickList: TFC = (title?: string, e?: any) => {
    getInfo().then((res) => {
      setNavData(res.list)
    })
  }
  var getHoverList: TFC = (title) => {
    getInfo().then((res) => {
      setPopData(res.list)
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
