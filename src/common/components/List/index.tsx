import React, { useEffect, useState } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import './style/index.scss'

interface Iitem extends RouteComponentProps{
  author: string
  cTime: number
  tag: Array<string>
  title: string
  abstract: string
  view: number
  like: number
  comment: number
  imgUrl?: string
}

const Jitem: React.FC<Iitem> = (props) => {
  const clickEvent = () => {
    props.history.push({
      pathname: '/content',
      query: { id: '1' },
    })
  }
  const {
    author,
    cTime,
    tag,
    title,
    abstract,
    view,
    like,
    comment,
    imgUrl,
  } = props
  return (
    <li className="item" onClick={()=>clickEvent()}>
      <div className="entry-box">
        <div className="entry">
          <div className="entry-link">
            <div className="content-box">
              <div className="meta-container">
                <div className="user-message">
                  <a
                    href="/user/1292681407377624"
                    target="_blank"
                    rel=""
                    className="userbox"
                  >
                    <div className="user-popover-box">{author}</div>
                  </a>
                </div>
                <div className="dividing"></div>
                <div className="date">16小时前</div>
                <div className="dividing"></div>
                <div className="tag_list">
                  <div className="tag">
                    <a
                      href="/tag/%E5%89%8D%E7%AB%AF"
                      target="_blank"
                      className="tag"
                    >
                      前端
                    </a>
                    <i className="point"></i>
                  </div>
                  <div className="tag">
                    <a
                      href="/tag/JavaScript"
                      target="_blank"
                      rel=""
                      className="tag"
                    >
                      JavaScript
                    </a>
                    <i className="point"></i>
                  </div>
                  <div className="tag">
                    <a
                      href="/tag/%E7%AE%97%E6%B3%95"
                      target="_blank"
                      rel=""
                      className="tag"
                    >
                      算法
                    </a>
                    <i className="point"></i>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <div className="content-main">
                  <div className="title-row">
                    <a
                      href="/post/7004454008634998821"
                      target="_blank"
                      rel=""
                      title={title}
                      className="title"
                    >
                      <span className="text-highlight">{title}</span>
                    </a>
                  </div>
                  <div className="abstract">
                    <a href="/post/7004454008634998821" target="_blank" rel="">
                      {abstract}
                    </a>
                  </div>
                  <ul className="action-list jh-timeline-action-area">
                    <li className="item view">
                      <i></i> <span>{view}</span>
                    </li>
                    <li className="item like">
                      <i></i> <span>{like}</span>
                    </li>
                    <li className="item comment">
                      <i></i> <span>{comment}</span>
                    </li>
                  </ul>
                </div>
                <img
                  src={imgUrl}
                  alt={title}
                  className="lazy thumb"
                  data-src={imgUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
Jitem.defaultProps = {
  
}
export default Jitem
