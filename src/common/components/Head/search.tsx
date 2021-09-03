import React, { useState, useEffect, useRef } from 'react'

interface ISearch {}
/* TODO: 
1. redux实现搜索框内容传递
2. onfocus input拉伸 √
*/
const Search: React.FC<ISearch> = (props) => {
  var [inputVal, setInputVal] = useState([])
  var [isFocus, setIsFocus] = useState(false)
  const inputEl = useRef(null)
  //清空搜索历史
  const clearSearch = () => {
    setInputVal([])
  }
  //点击搜索按钮 =》》 1.传递数据 2.保存搜索记录
  const searchClick = () => {
    //保存搜记录
    setInputVal([...inputVal, inputEl.current.value])
    //向redux传递数据
  }
  //input聚焦事件
  const inputFocus = (bl: boolean) => {
    setIsFocus(bl)
  }
  const HisList = inputVal.map((item) => {
    return <div className="list-item">item</div>
  })
  return (
    <form className={`search-form ${isFocus ? 'active' : ''}`}>
      <input
        type="search"
        placeholder="搜索文章/小册/标签/用户"
        className={`search-input ${isFocus ? 'active' : ''}`}
        ref={inputEl}
        onFocus={() => inputFocus(true)}
        onBlur={() => inputFocus(false)}
      />
      <img
        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8f68a2223e9650f14d6e6781cdcd717a.svg"
        alt="搜索"
        className="search-icon"
        onClick={searchClick}
      />
      <div className="typehead">
        <div className="title">
          <span>搜索历史</span>
          <span className="clear" onClick={clearSearch}>
            清空
          </span>
        </div>
        <div className="list">
          <div className="list-item">{HisList}</div>
        </div>
      </div>
    </form>
  )
}

export default Search
