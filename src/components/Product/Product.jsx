import './Product.css'

/* eslint-disable react/prop-types */
export default function Product({ product }) {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={product.thumbnail} alt="" srcSet="" />
      </div>
      <div className="productInfo">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <div className="ratingContainer">
          {Array.from({ length: product.rating }, (_, index) => (
            <span key={index} className="star">
              ⭐️
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
