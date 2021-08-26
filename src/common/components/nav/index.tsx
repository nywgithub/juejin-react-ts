import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import './style/index.scss'

export interface InavMenu {
  list: {
    title: string
    url: string
  }[]
  isHead?: boolean
  children: string
}

/* 
    TODO: 
    1.使用自定义hook复用map的逻辑
    2.展开绑定点击事件(点击后将大于10之后的标签插入最后)
    3.2添加动画过渡
    4.重复部分组件化
    5.样式
*/

//一级导航
const TopNav: React.FC<InavMenu> = (props) => {
  const [isHover, setIsHover] = useState(0)
  const { list, children } = props
  const navMouseHover = (index) => {
    setIsHover(index)
  }
  const navList = list.map((item, index) => {
    return (
      <Link className="nav-item" to={item.url} key={index}>
        <div
          className="item-title nav-popBox"
          onMouseOver={() => navMouseHover(index)}
        >
          {item.title}
          {isHover === index && children}
        </div>
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
  const navList = list.map((item, index) => {
    if (index < 10 || isHead) {
      return (
        <li className="nav-item" key={index}>
          <Link className="item-title" to={item.url}>
            {item.title}
          </Link>
        </li>
      )
    } else if (index === 10) {
      return (
        <li className="nav-item unfold" onClick={() => foldClick()} key={10}>
          展开
        </li>
      )
    } else {
      return (
        isFold && (
          <li className="nav-item" key={index}>
            <Link className="item-title" to={item.url}>
              {item.title}
            </Link>
          </li>
        )
      )
    }
  })

  return (
    <nav className="main-nav">
      <ul className="nav-list">{navList}</ul>
    </nav>
  )
}

export { TopNav, NavMenu }
