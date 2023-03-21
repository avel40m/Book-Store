import React, { useEffect, useState } from 'react'
import './searchpage.style.css';
import Navbar from '../../components/Layouts/Navbar/Navbar'
import Footer from '../../components/Layouts/footer/Footer'
import { useLocation } from 'react-router-dom';
import { BooksData } from '../../util/BookData';
import SearchResultCard from '../../components/Cards/SearchResultCard/SearchResultCard';

const SearchPage = () => {
    const location = useLocation();
    const [searchResult,setSearchResult] = useState([]);

    useEffect(()=>{
        let searchValue = [];
        searchValue = BooksData.filter(data => data.book_name.toLowerCase().includes(location.state.toLowerCase()))
        setSearchResult(searchValue);
    },[]);
  return (
    <section>
      <Navbar darkTheme={true} />
      <div className='search-result-container'>
        <div className='container'>
            <h2>Resultado de la busqueda</h2>
            {
                searchResult.map((result,index) => (
                    <SearchResultCard key={index} bookData={result} />
                ))
            }
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default SearchPage
