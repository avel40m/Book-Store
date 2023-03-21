import React from 'react'
import { Link } from 'react-router-dom';
import './searchresultcard.style.css';

const SearchResultCard = ({bookData}) => {

  return (
    <section className="cart-item">
    <div className="cart-item-img-container">
        <img src={bookData.book_url} alt="cart-item-img" className='cart-item-img' />
    </div>
    <div className="cart-item-content-container">
        <h2>{ bookData.book_name }</h2>
        <p>{ bookData.author_name }</p>
        <h3 className='cart-item-price'>$ { bookData.price }</h3>
        <Link to={`/book-details/${bookData.id}`} className="product-listing-button">Ver Mas</Link>
    </div>
</section>
  )
}

export default SearchResultCard
