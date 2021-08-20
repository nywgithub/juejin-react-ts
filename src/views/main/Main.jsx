import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppCard from '@CP/app-card'
import { NavMenu } from '@CP/nav'

const LIST = [
    {
        title:'首页',
        url:'/home'
    },
    {
        title:'登录',
        url:'/Login'
    }
]
function Main() {
  
  const [mockData, setmockData] = useState()
  const [navData, setNavData] = useState(LIST)
  useEffect(() => {
    fetchTest()
    // setNavData(LIST)
  }, [])

  var fetchTest = () => {
    axios({
      url: '/postdata1',
      method: 'get',
    }).then((res) => {
      setmockData(res.data.test)
    })
  }
  return (
    <>
      <NavMenu list={navData} isHead={false} />
      {/* <h2>hello {mockData}</h2> */}
      <AppCard
        title="此处为标题"
        icon="https://img01.yzcdn.cn/upload_files/2021/04/14/Fjumo6k-YcHhLVs_-XHHuyZn2sjH.png"
      />
    </>
  )
}
export default Main
