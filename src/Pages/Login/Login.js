import React from 'react'
import './login.style.css';
import AuthImg from '../../assets/books-images/books-signup.jpg';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import AuthForm from '../../components/Forms/AuthForm/AuthForm';

const Login = () => {
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
                <h2>Iniciar Sesion</h2>
                <p>Ingresar su correo electronico y contraseña.</p>
                <AuthForm value={true}/>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login
