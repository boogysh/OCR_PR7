import React from 'react'
import DefaultImage from '../../assets/imgDefault.png'
import './card.css'

function Card({ image, title }) {
  return (
    <div className="card">
      <div className="card_img_container">
        <img src={image} alt={`cover ${title}`} className="card_img" />
      </div>
      <h2 className="card_title">{title}</h2>
    </div>
  )
}
Card.defaultProps = {
  image: DefaultImage,
}
export default Card
