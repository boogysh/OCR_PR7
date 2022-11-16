import React from 'react'
import star_gray from '../../assets/star_gray.png'
import star_color from '../../assets/star_color.png'
import './rating.css'

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className='stars'>
      {stars.map((star) =>
        rating >= star ? (
          <img key={star} src={star_color} className='star' alt="red star" />
        ) : (
          <img key={star} src={star_gray} className='star' alt="grey star" />
        )
      )}
    </div>
  )
}
export default Rating
