import React from "react";
import SearchInputForm from "../../Forms/SearchInputForm/SearchInputForm";
import Navbar from "../Navbar/Navbar";
import "./showcase.style.css";

const ShowCase = () => {
  return (
    <div className="showcase-container">
      <Navbar darkTheme={false}/>
      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>Los mejores <span className="text-primary">Libros</span> Disponibles</h1>
        <p>Comprar libros de calidad al mejor precio</p>
      <SearchInputForm darkTheme={true}/>
      </div>
    </div>
  );
};

export default ShowCase;
