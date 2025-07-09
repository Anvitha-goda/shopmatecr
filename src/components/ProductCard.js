import { useEffect,useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const { cartList,addToCart,removeFromCart } = useCart();
  const {id,name, price, image} = product;
  const [isInCart,setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id); 
    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }

  },[cartList,id])

  function handleAdd(){
    addToCart(product);
    console.log(cartList);
  }

  return (   
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { isInCart ? <button className="remove" onClick={() => removeFromCart(product) }>Remove</button> : (<button onClick={handleAdd}>Add To Cart</button>)}
      </div>
    </div>
  )
}
