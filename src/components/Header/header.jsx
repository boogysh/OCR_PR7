import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import './header.css'

function Header() {
  const activeLink = 'item_nav active'
  const normalLink = 'item_nav'
  return (
    <div className="container_header">
      <Link to="/">
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo_img"></img>
        </div>
      </Link>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          A propos
        </NavLink>
      </div>
    </div>
  )
}
export default Header
