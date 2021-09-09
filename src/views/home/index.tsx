import React from 'react'
import Clist from "@/redux/containers/Clist"
import Top from '@/common/components/Top/Top'
import { Layout } from 'antd'
const { Header } = Layout
const Home = ()=> {
  return (
    <>
      <Header><Top /></Header>
      <h2>WELCOME</h2>
      <Clist />
    </>
  )
}

export default Home
