import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="gridContainer">
        <div className="gridItem">
          <div className="titleContainer">
            <p>Follow Us</p>
          </div>
          <div className="flexContainer">
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
        <div className="gridItem">
          <div className="titleContainer">
            <p>Our Newsletter</p>
          </div>
          <div className="flexContainer">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/96/email-open.png"
              alt="email-open"
            />
            <input type="text" name="" id="" placeholder="Write your email" />
            {/* <button>Send</button> */}
          </div>
        </div>
        <div className="gridItem">
          <div className="titleContainer">
            <p>Contact</p>
          </div>
          <div>
            <div className="flexContainer">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/material-outlined/96/whatsapp--v1.png"
                alt="whatsapp--v1"
              />
              <a href="tel:+543472626969">+54 3472 62 6969</a>
            </div>
            <div className="flexContainer">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios/98/new-post--v1.png"
                alt="new-post--v1"
              />
              <a href="mailto:email@gadgetsgalaxy.com">
                email@gadgetsgalaxy.com
              </a>
            </div>
            <div className="flexContainer">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ios/98/address--v1.png"
                alt="address--v1"
              />
              <address>
                Liniers 422, General Roca, <br /> Cordoba, Argentina
              </address>
            </div>
          </div>
        </div>
        <div className="gridItem">
          <div className="titleContainer">
            <p>Site Map</p>
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
      </div>

      <div className="footerAuthor">
        <p>© 2024 Gadget Galaxy, Inc. All rights reserved.</p>
        <div className="flexContainer">
          <p>
            Created by{' '}
            <a href="https://github.com/andres-verdenelli">Andrés Verdenelli</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
