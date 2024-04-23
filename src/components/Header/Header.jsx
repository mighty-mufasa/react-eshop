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
          <button>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
    </>
  )
}
