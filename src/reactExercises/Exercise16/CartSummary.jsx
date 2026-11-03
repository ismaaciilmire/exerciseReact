import React,{useContext} from 'react'
import cartContext from './CartContext'

const CartSummary = () => {
  const {cartItems,removeFromCart} = useContext(cartContext)
  return (
    <div>
      <h1>cart summary</h1>
      <p>total items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item)=>(
          <li key={item.id}>
            {item.name} - ${item.price}{''}
            <button onClick={()=>removeFromCart(item.id) }>remove</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartSummary