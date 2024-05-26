import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link to="/">
            <h1>Gadget Galaxy 🪐</h1>
          </Link>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="login">Login</Link>
          </div>
          <button className="burgerButton">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
    </>
  )
}
