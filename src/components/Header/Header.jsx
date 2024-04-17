import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
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
