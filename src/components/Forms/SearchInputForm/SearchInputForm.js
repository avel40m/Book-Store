import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './searchinputform.style.css';

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();

  const redirectToSearch = () => {
    if (searchField === '') {
      Swal.fire('No existe ese Libro','','success');
    } else {
      navigate('/search',{state:searchField});
    }
  }

  return (
    <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
      <input
        type="text" 
        placeholder='Buscar Libro' 
        className='search-input' 
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
        />
      <button onClick={redirectToSearch} className='search-button'>Buscar</button>
    </div>
  )
}

export default SearchInputForm
