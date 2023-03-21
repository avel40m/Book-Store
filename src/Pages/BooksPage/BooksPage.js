import React from 'react'
import Navbar from '../../components/Layouts/Navbar/Navbar';
import SearchInputForm from '../../components/Forms/SearchInputForm/SearchInputForm';
import './booksPage.style.css';
import ProductListingAll from '../../components/Layouts/ProductListingAll/ProductListingAll';
import Footer from '../../components/Layouts/footer/Footer';

const BooksPage = () => {
  return (
    <div>
      <Navbar darkTheme={true}/>
      <div className="search-container">
        <h2>Encuentre los <span className='text-primary'>Libros</span> que desea</h2>
        <SearchInputForm darkTheme={false} />
      </div>
      <ProductListingAll />
      <Footer />
    </div>
  )
}

export default BooksPage
