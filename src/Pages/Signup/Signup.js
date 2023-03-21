import React from 'react'
import './signup.style.css';
import AuthImg from '../../assets/books-images/books-signup.jpg';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import AuthForm from '../../components/Forms/AuthForm/AuthForm';

const Signup = () => {
  return (
    <>
    <Navbar darkText={true} />
    <section className='signup-container'>
        <div className='signup-img-container'>
            <img src={AuthImg} alt="" />
        </div>
        <div className='signup-content-container'>
            <div className="container">
            <div className='content-wrapper'>
                <h2>Registrarme</h2>
                <p>Crear una nueva cuenta</p>
                <AuthForm  value={false} />
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup
