import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookDetailsPage from "./Pages/BookDetailsPage/BookDetailsPage";
import BooksPage from "./Pages/BooksPage/BooksPage";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import app from './firebase/Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartPage from "./Pages/CartPage/CartPage";
import ScrollToTop from "./components/Util/ScrollToTop";
import SearchPage from "./Pages/SearchPage/SearchPage";

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
    const auth = getAuth(app);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems,setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user){
                setAuthenticatedUser(user);
            }else {
                setAuthenticatedUser(null);
            }
        });
    },[])

    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        setTotalAmount(total);
    },[cartItems]);
    return(
        <ScrollToTop>
        <UserContext.Provider value={authenticatedUser}>
            <CartContext.Provider value={{cartItems,totalAmount,setCartItems}}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/book-details/:id" element={<BookDetailsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </CartContext.Provider>
        </UserContext.Provider>
        </ScrollToTop>
    )
}

export default App;