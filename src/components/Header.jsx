import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>Fruit Shop </h1>
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
              <button>♥️</button>
            </li>
            <li>
              <button>🛒</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
