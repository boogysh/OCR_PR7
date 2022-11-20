import './banner.css'

function Banner({ src, title }) {
  return (
    <div className="kasa_banner">
      <img className="img_banner" src={src} alt="banner home" />
      <h1 className="h1_home">{title}</h1>
    </div>
  )
}
export default Banner
