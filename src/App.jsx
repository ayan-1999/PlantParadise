import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Cart from "./pages/cart/Cart";
import Login from "./pages/loginPage/Login";
import SignUp from "./pages/loginPage/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
