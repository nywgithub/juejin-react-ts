import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Jlist = ({value})=> {
  const [mockData, setmockData] = useState()
  useEffect(() => {
    console.log(value)
    fetchTest()
  }, [])

  //测试mock
  const fetchTest = () => {
    axios({
      url: '/postdata1?value=',
      method: 'get',
    }).then((res) => {
      setmockData(res.data.test)
    })
  }
  return (
    <>
      <h2>hello {value.value}</h2>
    </>
  )
}



export default Jlist
