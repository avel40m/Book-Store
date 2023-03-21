import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext, UserContext } from '../../../App';
import { ReactComponent as Cart} from '../../../assets/cart.svg';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase/Firebase.js';
import './navbar.style.css';

const Navbar = ({darkTheme, darkText}) => {
  
  const user = useContext(UserContext);
  const {cartItems,setCartItems} = useContext(CartContext);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setCartItems([]);
      navigate('/');
    }).catch((err) => console.log(err))
  }

  const showLogingAndSingup = (
      <nav className='nav-links-container'>
        <Link to={'/'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Inicio</Link>
        <Link to={'/books'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Libros</Link>
        <Link to={'/login'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Ingresar</Link>
        <Link to={'/signup'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Registrarme</Link>
      </nav>
    );

  const showLogoutAndCart = (
    <nav className='nav-links-container'>
      <Link to={'/'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Inicio</Link>
      <Link to={'/books'} className={darkText ? 'nav-links-dark' : 'nav-links'}>Libros</Link>
      <Link onClick={handleLogout} className={darkText ? 'nav-links-dark' : 'nav-links'}>Salir</Link>
      <Link to={'/cart'} href="" className='cart-link'><Cart/> <p className='cart-number'>{cartItems.length}</p></Link>
    </nav>
  )

  return (
    <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent'}`}>
       <div className="container flex justify-between align-center">
        <Link to={'/'} className='logo'>Book<span className='text-primary'>worm</span></Link>
          { user ? showLogoutAndCart : showLogingAndSingup }
       </div>
    </section>
  )
}

export default Navbar
