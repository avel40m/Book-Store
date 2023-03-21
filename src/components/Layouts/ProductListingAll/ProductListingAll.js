import React from "react";
import "./productlistingall.style.css";
import ProductListingCard from "../../Cards/Product-Listing-Card/ProductListingCard";
import { BooksData } from "../../../util/BookData";

const ProductListingAll = () => {
  return (
    <section className="product-listing-all-container">
      <div className="container">
        <div className="grid-container">
          {BooksData.map((book, index) => (
            <div className="grid-item" key={index}>
              <ProductListingCard bookData={book}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
