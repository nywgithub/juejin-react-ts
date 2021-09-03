import React, { useState, useEffect, useRef } from 'react'

const Select = () => {
  const [active, setActive] = useState<boolean>(false)
  const clickMore= () => {
      setActive(!active)
  }
  return (
    <div className={`add-group ${active ? 'active' : ''}`}>
      <button className="add-btn">写文章</button>
      <div className="more" onClick={clickMore}>
        <img src="" />
      </div>
      <ul className="more-list">
        <li className="item">发布沸点</li>
      </ul>
    </div>
  )
}

export default Select
