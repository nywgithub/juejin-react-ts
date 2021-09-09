import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Jitem from './index'

const Jlist = ({ value }) => {
  const [mockData, setmockData] = useState()
  const [Jlist, setJlist] = useState([])
  useEffect(() => {
    //mapStateToProps重新渲染并不会执行useEffect
    console.log(value)
    fetchTest()
  }, [])

  //测试mock
  const fetchTest = () => {
    axios({
      url: '/postdata1',
      method: 'get',
    }).then((res) => {
      setmockData(res.data.test)
      setJlist(res.data.list)
    })
  }
  const listMap = Jlist.map((item, index) => {
    return <Jitem key={index} {...item} />
  })
  return (
    <>
      <h2>
        hello {value.value} {mockData}
      </h2>
      {listMap}
    </>
  )
}

export default Jlist
