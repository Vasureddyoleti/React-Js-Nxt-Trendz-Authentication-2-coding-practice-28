// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <img
          className="product-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </>
  )
}
export default Products
