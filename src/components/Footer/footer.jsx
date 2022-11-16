import React, { useState, useEffect } from 'react'
import '../Footer/footer.css'
import logo_footer from '../../assets/logo-footer.png'

function Footer() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 200)
  }, [])
  return (
    show && (
      <footer>
        <img src={logo_footer} alt="logo kasa" />
        <h3 className="h3_footer">&copy; 2022 Kasa. All right reserved</h3>
      </footer>
    )
  )
}
export default Footer


