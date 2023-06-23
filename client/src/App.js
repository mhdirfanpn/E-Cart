import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/user/Login';
import Home from "./Pages/user/Home";
import CartPage from './Pages/user/CartPage';
import Register from './Pages/user/Register';
import AddProduct from './Pages/admin/AddProduct';
import ScrollToTop from './scrollTop/scrollTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/register' element={
              <Register />
            } />
          </Routes>
          <Routes>
            <Route path='/login' element={
              <Login />
            } />
          </Routes>
          <Routes>
            <Route path='/' element={
              <Home />
            } />
          </Routes>

          <Routes>
            <Route path='/cart' element={
              <CartPage />
            } />
          </Routes>


          <Routes>
            <Route path='/admin' element={
              <AddProduct />
            } />
          </Routes>

        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
