import React, { useState, useEffect } from 'react'

const Avator = () => {
  const [name, setName] = useState<string>('leo')
  const [url, setUrl] = useState<string>('https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/3793/3131589739~300x300.image')
  return (
    <div>
      <img
        src="https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/3793/3131589739~300x300.image"
        alt={name + "的头像"}
        className="lazy avatar avatar immediate"
        data-src={url}
      />
    </div>
  )
}

export default Avator
