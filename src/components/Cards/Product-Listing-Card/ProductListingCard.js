import React from "react";
import { Link } from "react-router-dom";
import "./productlistingcard.style.css";

const ProductListingCard = ({ bookData }) => {
  return (
    <div className="product-listing-card">
      <div className="product-listing-img-container">
        <img src={bookData.book_url} alt="" className="product-listing-image" />
      </div>
      <div className="product-listing-details-container">
        <h3>{ bookData.book_name }</h3>
        <p className="author-name">{ bookData.author_name }</p>
        <p className="pricing">${ bookData.price }</p>
      </div>
      <div className="card-btn-container">
        <Link to={`/book-details/${bookData.id}`} href="" className="product-listing-button">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default ProductListingCard;
