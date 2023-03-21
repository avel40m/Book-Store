import React, { useContext, useEffect, useState } from "react";
import "./detailssection.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { BooksData } from "../../../util/BookData";
import { CartContext, UserContext } from '../../../App';
import Swal from "sweetalert2";

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const navigate = useNavigate();

  const user = useContext(UserContext);
  const {cartItems,setCartItems} = useContext(CartContext);

  useEffect(() => {
    let newData = BooksData.filter(book => book.id === parseInt(id));
    setBookData(newData[0]);
  },[id]);

  const handleAddCart = () => {
    let newBook = cartItems.filter(book => book.id === bookData.id);
    if (newBook.length !== 0) {
      Swal.fire('El libro está agregado al carrito','','error');
      return;
    }
    if (user) {
      setCartItems([...cartItems,bookData]);
      Swal.fire(`El libro ${bookData.book_name} fue agregado al carrito`,'','success');
    } else {
      navigate('/login');  
      Swal.fire('Primero se tiene que loggear','','error');
    }
  }

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          <div className="book-img-container">
            <img src={ bookData.book_url } alt="book" />
          </div>
          <div className="book-detail-container">
            <h2>{ bookData.book_name }</h2>
            <p className="text-primary">{ bookData.author_name }</p>
            <p className="book-description">{ bookData.book_description }</p>
            <p><b>Lenguaje</b>: {bookData.language}</p>
            <p><b>Paginas</b>: { bookData.print_lenght }</p>
            <h3>$ { bookData.price }</h3>
            <button onClick={handleAddCart} className="button-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
