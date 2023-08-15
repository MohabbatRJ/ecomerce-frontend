import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import StorePage from './Pages/StorePage/StorePage'
import Footer from './components/Global/Footer/Footer'
import Navbar from './components/Global/Navbar'
import { Routes, Route } from 'react-router-dom'
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage'
import CartPage from './Pages/CartPage/CartPage'
import LoginForm from './components/users/LoginForm'
import SignUpForm from './components/users/SignUpForm'
import Wishlist from './components/Global/Wishlist/Wishlist'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' index element={<HomePage />} />
        <Route exact path='/store' element={<StorePage />} />
        <Route exact path='/product' element={<ProductsPage />} />
        <Route exact path='/product-detail/:title' element={<ProductDetailPage />} />
        <Route exact path='/sign-in' element={<LoginForm />} />
        <Route exact path='/sign-up' element={<SignUpForm />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
