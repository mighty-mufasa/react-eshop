import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="homeContainer">
      <h2>Welcome to your Gateway to Innovation</h2>
      <p>
        Your ultimate destination to discover the most innovative and exciting
        gadgets on the market.
      </p>
      <h3>Tech Wonderland Awaits you</h3>
      <p>
        Dive into a universe of technological possibilities and make your
        cutting-edge dreams come true with us.
      </p>
      <h3>Explore the future to GadgetGalaxy</h3>
      <p>
        Step into the world of innovation with GadgetGalaxy. Explore our curated
        collection of the latest gadgets and tech trends that will elevate your
        lifestyle. Experience the future today.
      </p>
      <button>
        <Link to="/store">Shop Now</Link>
      </button>
    </div>
  )
}
