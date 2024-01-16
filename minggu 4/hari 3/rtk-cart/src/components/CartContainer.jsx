import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cartSlice";

const CartContainer = () => {
  const {cartItems, priceTotal, amount} = useSelector( (state) => state.cart)
  const dispatch = useDispatch ()

  console.log(cartItems);
  if (amount <1 ) {
    return ( 
    
      <section className="cart">
        <h3>Your Bag</h3>
        <h4 className="empty-cart">
          Is Empty
        </h4>
      </section>
      
    )
  }
  return ( 
    <section>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map(( item) =>{
          return <CartItem key= {item.id} item={item}
          {...item} />
          })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>{priceTotal}</span>
          </h4>
          <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          </button>

        </div>
      </footer>
    </section>
  )
}
export default CartContainer