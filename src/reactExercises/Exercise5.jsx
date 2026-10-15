import { useState } from "react";

const ShoppingCart=()=>{
    
    const [products,setproducts] = useState([])
    const [productName, setProductName] = useState("")
    const [productPrice,setProductPrice] = useState('')
    const handleAddProduct=()=>{
       if(productName.trim() !=="" && productPrice.trim() !==""){
        const newProduct={
            id: Date.now(),
            name:productName,
            price: parseFloat(productPrice),
            quantity: 1

        }
        setproducts([...products,newProduct])
        setProductName("")
        setProductPrice("")
       }
    }
    const removeProduct=(id)=>{
     const updatedProducts = products.filter(product => product.id !== id)
     setproducts(updatedProducts)
    }

    const increasequantity=(id)=>{
        const updatedProducts = products.map(product =>(
            product.id === id ? {...product, quantity : product.quantity +1} : product
        ))
         setproducts(updatedProducts);
    }

    const descreaseQuantity=(id)=>{
        const updatedProducts = products.map(product=>(
            product.id === id && product.quantity > 1 ? {...product, quantity : product.quantity -1} : product

        ))
        setproducts(updatedProducts)
    }

    const totalPrice =products.reduce((total,product)=> total + product.Price * product.quantity , 0) 

   
    return (
        
        <div>
            <h2>Simple shopping cart</h2>

            <div>
            <h3>Add a Product</h3>
            <input type="text" 
            placeholder="productName"
            onChange={(e)=>setProductName(e.target.value)} value={productName} />

            <input type="number" min="0"
             placeholder="price" 
             onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
            <button onClick={handleAddProduct}>Add To Cart</button>
         
        </div>
         {
            products.length > 0 ? (
                <div>
                <h3>Products in Cart</h3>
        
                <ul>
                    {
                        products.map(product=>(
                            <li key={product.id}>
                                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                                <div>
                                    Quantity:
                                    <button onClick={()=>descreaseQuantity(product.id)}>-</button>
                                    <button onClick={()=>increasequantity(product.id)}>+</button>
                                </div>
                                <button onClick={() => removeProduct(product.id)}>Remove</button>

                            </li>
                        ))
                    }


                </ul>
                <h4>total price ${totalPrice}</h4>
               </div>

            ):  <p>this cart is empty</p>
         }
        </div>
        
       
    
    )

}
export default ShoppingCart;