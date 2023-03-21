import React from 'react'
import CartItemsContainer from '../../components/Layouts/CartItemsContainer/CartItemsContainer';
import Footer from '../../components/Layouts/footer/Footer';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import './cartpage.style.css';

const CartPage = () => {
  return (
    <div>
      <Navbar darkTheme={true} />
       <CartItemsContainer />   
      <Footer />
    </div>
  )
}

export default CartPage
