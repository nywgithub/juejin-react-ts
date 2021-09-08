import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

function Home() {
  const [mockData, setmockData] = useState()
  useEffect(() => {
    fetchTest()
  }, [])

  //测试mock
  const fetchTest = () => {
    axios({
      url: '/postdata1',
      method: 'get',
    }).then((res) => {
      setmockData(res.data.test)
    })
  }
  //获取搜索框数据
  const getSearch = () => {
    
  }
  return (
    <>
      <h2>hello {mockData}</h2>
      
    </>
  )
}
const mapStateToProps = state => ({
  todos: state
})

export default connect(
  mapStateToProps
)(Home)
