import React, { useCallback, useState } from 'react'
import {Link} from 'react-router-dom'
import './style/index.scss'

export interface InavMenu {
  list: {
    title: string
    url: string
  }[]
  isHead?: boolean
}

/* 
    TODO: 
    1.使用自定义hook复用map的逻辑
    2.展开绑定点击事件(点击后将大于10之后的标签插入最后)
    3.2添加动画过渡
    4.重复部分组件化
*/

//一级导航
const TopNav: React.FC<InavMenu> = (props) => {
  const { list } = props
  const navList = list.map((item) => {
    return (
      <Link className="nav-item" to={item.url}>
        <div className="item-title">{item.title}</div>
      </Link>
    )
  })
  return <div className="nav-list">{navList}</div>
}

//二级导航 + 顶部导航
const NavMenu: React.FC<InavMenu> = (props) => {
  const [isFold, setIsFold] = useState(false)
  const { list, isHead } = props
  const foldClick = () => setIsFold(!isFold)
  const navList = list.map((item) => {
    return list.length < 10 || isHead ? (
      <li className="nav-item">
        <Link className="item-title" to={item.url}>
          {item.title}
        </Link>
      </li>
    ) : (
      !isFold && (
        <li className="nav-item unfold" onClick={() => foldClick()}>
          展开
        </li>
      )
    )
  })
  const foldNav = list.map((item) => {
    return (
      list.length >= 10 && (
        <li className="nav-item">
          <Link className="item-title" to={item.url}>
            {item.title}
          </Link>
        </li>
      )
    )
  })
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {navList}
        {isFold && { foldNav }}
      </ul>
    </nav>
  )
}

export { TopNav, NavMenu }
