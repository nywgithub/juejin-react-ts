import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import './style/index.scss'

export interface InavMenu {
  list: {
    title: string
    url: string
  }[]
  isHead?: boolean
}

export interface ItopMenu extends InavMenu {
  getClickList: (title: string) => void
  getHoverList: (title: string) => void
}

/* 
    TODO: 
    1.使用自定义hook复用map的逻辑
    2.展开绑定点击事件(点击后将大于10之后的标签插入最后) √
    3.2添加动画过渡
    4.样式
*/

//一级导航
const TopNav: React.FC<ItopMenu> = (props) => {
  const { list, children, getClickList, getHoverList } = props

  const [isHover, setIsHover] = useState<number>(100)

  const navMouseHover = (index) => setIsHover(index)
  const navMouseOut = () => setIsHover(100)
  const getClick = (title) => getClickList(title)
  const getHover = (title) => getHoverList(title)

  const navList = list.map((item, index) => {
    return (
      <Link
        className="nav-item"
        to={item.url}
        key={index}
        onMouseOver={() => {
          navMouseHover(index)
          getHover(item.title)
        }}
        onClick={() => getClick(item.title)}
        onMouseOut={() => navMouseOut()}
      >
        <div className="item-title nav-popBox">
          {item.title}
          {isHover === index && children}
        </div>
      </Link>
    )
  })
  return <div className="nav-list nav-top">{navList}</div>
}

//二级导航 + 顶部导航
const NavMenu: React.FC<InavMenu> = (props) => {
  const { list, isHead } = props

  const [isFold, setIsFold] = useState<boolean>(false)

  const foldClick = () => setIsFold(!isFold)
  const navList = list.map((item, index) => {
    if (index < 10) {
      return (
        <li className="nav-item" key={index}>
          <Link className="item-title" to={item.url}>
            {item.title}
          </Link>
        </li>
      )
    } else if (index === 10 && !isHead) {
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
