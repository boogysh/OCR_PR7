import './banner.css'
import React, { useState, useEffect } from 'react'

function Banner({ src, title }) {
  const [banner, setBanner] = useState('banner')
  const [bannerImg, setBannerImg] = useState('bannerImg')
  const href = window.location.href.includes('/apropos')

  useEffect(() => {
    if (href) setBanner('banner_about') || setBannerImg('bannerImg_about')
    else setBanner(banner) || setBannerImg(bannerImg)
  }, [banner, bannerImg, href])

  return (
    <div className={banner}>
      <img className={bannerImg} src={src} alt="banner home" />
      <h1 className="h1_home">{title}</h1>
    </div>
  )
}
export default Banner
