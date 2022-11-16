import React from 'react'
import DefaultPicture from '../../assets/host.png'
import './host.css'

function Host({ name, picture }) {
  return (
    <div className="host_content">
      <h3 className="h3_host">{name}</h3>
      <div className="cercle">
        <img className="img_host" src={picture} alt="host" />
      </div>
    </div>
  )
}
Host.defaultProps = {
  picture: DefaultPicture,
}
export default Host
