import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Welcome to Fruits Shop</h1>
      <p>
        Discover our selection of fresh fruits, bursting with flavor and
        vitality. Delivered straight from the farm to your table.
      </p>
      <button>
        <Link to="/store">Shop Now</Link>
      </button>
    </>
  )
}
