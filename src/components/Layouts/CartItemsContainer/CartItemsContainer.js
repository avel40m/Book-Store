import React, { useContext } from "react";
import "./cartitemscontainer.style.css";
import CardItemsCart from "../../Cards/CardItemsCart/CardItemsCart";
import { CartContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartItemsContainer = () => {
  const { cartItems, totalAmount,setCartItems } = useContext(CartContext);
  const stripeKey = "pk_test_51MkTRhFBrNV1ZwalgZjxEz2S6uxm9y43PoHWHLgjXu4sWRVrqMjjm9qeXyNJCD1KwJ25ei3A2q27X4jgq68dGRXd00O2PS874r"
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    Swal.fire('Su Pago ha sido procesado exitosamente','','success');
    setCartItems([]);
    navigate("/books")
  }

  return (
    <section className="cart-items-container">
      <div className="container">
       {totalAmount === 0 ? (
        <h2>No tiene producto</h2>
       ) : (
        <>
        <h2>Carrito de compra</h2>
        {cartItems.map((item, index) => (
          <CardItemsCart key={index} bookData={item} />
        ))}
        <h2>Monto total = $ { totalAmount }</h2>
        <StripeCheckout 
        name="Pago del Libro" 
        description="Por favor complete los detalles a continuación" 
        amount={totalAmount * 100} 
        currency="USD" 
        stripeKey={stripeKey} 
        token={onToken}
        billingAddress>
        <button className="button-primary">Comprar</button>
        </StripeCheckout>
        </>
       )}
      </div>
    </section>
  );
};

export default CartItemsContainer;
