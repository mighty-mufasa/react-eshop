import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <>
      <header>
        <div>
          <h1>Gadget Galaxy 🪐</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <button>
                <span className="material-icons">favorite</span>
              </button>
            </li>
            <li>
              <button>
                <span className="material-icons">shopping_bag</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
