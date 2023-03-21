import React from 'react'
import ProductListingCard from '../../Cards/Product-Listing-Card/ProductListingCard';
import './productlisting.style.css';
import { BooksData } from '../../../util/BookData';


const ProductListing = () => {
  return (
    <div className='product-listing-container'>
        <div className="container">
            <h2>He aquí algunos <span className='text-primary'>libros</span> que podrían gustarle</h2>
            <div className="listing-container">
              {
                BooksData.slice(0,4).map((book, index) => (
                  <ProductListingCard key={index} bookData={book} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default ProductListing
