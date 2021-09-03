import React, { useState, useEffect, useRef } from 'react'

interface ISearch {}
/* TODO: 
1. redux实现搜索框内容传递
2. onfocus input拉伸 √
*/
type snArray = (string | number )[] 
const Search: React.FC<ISearch> = (props) => {
  var [inputVal, setInputVal] = useState<snArray>([])
  var [isFocus, setIsFocus] = useState(false)
  const inputEl = useRef<any>(null)
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
        src=""
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
