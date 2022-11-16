import './banner.css'

function Banner({ src, title, addClass}) {
  return (
    <div className={`kasa_banner ${addClass}`}>
      <img className={`img_banner ${addClass}`} src={src} alt="banner home" />
      <h1 className="h1_home">{title}</h1>
    </div>
  )
}

export default Banner
