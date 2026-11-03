import React,{useContext} from 'react'
import cartContext from './CartContext'

const ProductItem = ({itemId,itemName,price}) => {
  const {addToCart} = useContext(cartContext)

  const handleAdd =()=>{
    addToCart({id:itemId, name: itemName,price})
  }


  return (
    <div>
      <p>{itemName}</p>
      <p>price: ${price}</p>
      <button onClick={ handleAdd}>add to cart</button>
    </div>
  )
}

export default ProductItem