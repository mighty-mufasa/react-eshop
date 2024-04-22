import './Store.css'
import { productList } from '../../assets/productList'
import Product from '../Product/Product'
import { useEffect, useState } from 'react'

export default function Store() {
  // const [products, setProducts] = useState(productList)
  const [filteredProducts, setFilteredProducts] = useState(productList)
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('rating')
  const [categoryValue, setCategoryValue] = useState('all')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  //falta traer los objetos de la API

  useEffect(() => {
    let filteredProducts = []
    filteredProducts = productList.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    if (categoryValue !== 'all') {
      const filteredCategory = filteredProducts.filter(
        (product) => product.category === categoryValue
      )
      filteredProducts = filteredCategory
    }
    minPrice === '' ? setMinPrice(0) : minPrice
    maxPrice === '' ? setMaxPrice(0) : maxPrice
    if (minPrice !== 0) {
      const filteredMinPrice = filteredProducts.filter(
        (product) => product.price >= minPrice
      )
      filteredProducts = filteredMinPrice
    }
    if (maxPrice !== 0) {
      const filteredMaxPrice = filteredProducts.filter(
        (product) => product.price <= maxPrice
      )
      filteredProducts = filteredMaxPrice
    }

    if (sortValue === 'rating') {
      filteredProducts.sort((a, b) => b.rating - a.rating)
    }
    if (sortValue === 'decrease') {
      filteredProducts.sort((a, b) => a.price - b.price)
    }
    if (sortValue === 'increase') {
      filteredProducts.sort((a, b) => b.price - a.price)
    }
    setFilteredProducts(filteredProducts)
  }, [searchValue, sortValue, categoryValue, minPrice, maxPrice])

  return (
    <div>
      <h1>Welcome to our Store!</h1>
      <div className="filtersContainer">
        <label htmlFor="">Search</label>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <div>
          <label htmlFor="">Sort by</label>
          <select onChange={(e) => setSortValue(e.target.value)}>
            <option value="rating">Rating</option>
            <option value="increase">Price Increase</option>
            <option value="decrease">Price Decrease</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Category</label>
          <select onChange={(e) => setCategoryValue(e.target.value)}>
            <option value="all">All</option>
            {productList
              .map((product) => product.category)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((category) => {
                const categoryUpperCase =
                  category.charAt(0).toUpperCase() + category.slice(1)
                return (
                  <option key={category} value={category}>
                    {categoryUpperCase}
                  </option>
                )
              })}
          </select>
        </div>
        <label htmlFor="">Price</label>
        <div>
          <input
            onChange={(e) => setMinPrice(e.target.value)}
            type="number"
            name=""
            id=""
            placeholder="Min"
          />
          <input
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
            name=""
            id=""
            placeholder="Max"
          />
        </div>
      </div>
      <div className="productsContainer">
        {filteredProducts.length === 0 && <h2>No products found</h2>}
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
