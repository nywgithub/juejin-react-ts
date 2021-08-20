import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppCard from '@CP/app-card'

function Home() {
  
  const [mockData, setmockData] = useState()
  useEffect(() => {
    fetchTest()
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
      <h2>hello {mockData}</h2>
      {/* <AppCard
        title="此处为标题"
        icon="https://img01.yzcdn.cn/upload_files/2021/04/14/Fjumo6k-YcHhLVs_-XHHuyZn2sjH.png"
      /> */}
    </>
  )
}
export default Home
