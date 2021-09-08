import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const Home = ({value})=> {
  const [mockData, setmockData] = useState()
  useEffect(() => {
    console.log(value)
    fetchTest()
  }, [])

  //测试mock
  const fetchTest = () => {
    axios({
      url: '/postdata1?value=' + value.value,
      method: 'get',
    }).then((res) => {
      setmockData(res.data.test)
    })
  }
  return (
    <>
      <h2>hello {mockData}</h2>
      
    </>
  )
}

const mapStateToProps = state => ({
  value: state.searchVal
})

export default connect(
  mapStateToProps
)(Home)
