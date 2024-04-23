import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="titleContainer">
          <p className="bold">Follow Us</p>
        </div>
        <div className="flexContainer titleContainer">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-outlined/96/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-outlined/96/000000/instagram-new--v1.png"
            alt="instagram-new--v1"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material/96/twitter--v2.png"
            alt="twitter--v2"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/ios/100/youtube-play--v1.png"
            alt="youtube-play--v1"
          />
        </div>
      </div>

      <div className="container">
        <div className="titleContainer">
          <p className="bold">Contact</p>
        </div>
        <div className="flexContainer">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/ios/98/address--v1.png"
            alt="address--v1"
          />
          <address>Liniers 422, General Roca, Cordoba, Argentina</address>
        </div>
        <div className="flexContainer">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/ios/98/new-post--v1.png"
            alt="new-post--v1"
          />
          <a href="mailto:email@gadgetsgalaxy.com">email@gadgetsgalaxy.com</a>
        </div>
        <div className="flexContainer">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/material-outlined/96/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
          <a href="tel:+543472626969">+54 3472 62 6969</a>
        </div>
      </div>
      <div className="container">
        <div className="titleContainer">
          <p className="bold">Subscribe to our Newsletter</p>
        </div>
        <div className="flexContainer">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/96/email-open.png"
            alt="email-open"
          />
          <input type="text" name="" id="" placeholder="Write your email" />
        </div>
      </div>
      <div className="container">
        <div className="titleContainer">
          <p className="bold">Site Map</p>
        </div>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <div className="flexContainer center">
          <p>
            Created by{' '}
            <a href="https://github.com/andres-verdenelli">Andrés Verdenelli</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
