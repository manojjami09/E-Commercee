import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {id,name, brand, quantity, price, image} = cartItemDetails
  const { deleteCartItem } = useContext(CartContext);
  
  
  return (
    <li className="cart-item">
      <img className="cart-product-image" src={image} alt={name} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{name}</p>
          <p className="cart-product-brand">{brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button type="button" className="quantity-controller-button">
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button type="button" className="quantity-controller-button">
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-delete-container">
          <p className="cart-total-price">Rs {price * quantity}/-</p>
          <button className="remove-button" type="button">
            Remove
          </button>
        </div>
      </div>
      <button className="delete-button" type="button" onClick={() => deleteCartItem(id)}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  )
}

export default CartItem
