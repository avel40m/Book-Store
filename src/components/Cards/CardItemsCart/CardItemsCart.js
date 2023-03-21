import React, { useContext } from 'react'
import { CartContext } from '../../../App';
import './carditemcart.style.css';

const CardItemsCart = ({bookData}) => {

    const {cartItems,setCartItems} = useContext(CartContext);

    const handleRemove = () => {
        setCartItems(cartItems.filter(item => item.id !== bookData.id));
    }

  return (
    <section className="cart-item">
    <div className="cart-item-img-container">
        <img src={bookData.book_url} alt="cart-item-img" className='cart-item-img' />
    </div>
    <div className="cart-item-content-container">
        <h2>{ bookData.book_name }</h2>
        <p>{ bookData.author_name }</p>
        <h3 className='cart-item-price'>$ { bookData.price }</h3>
        <button onClick={handleRemove} className='delete_btn'>Sacar del carrito</button>
    </div>
</section>
  )
}

export default CardItemsCart
