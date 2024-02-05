import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShopingCart from "./components/ShopingCart";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import {
  AboutUs,
  ContactUs,
  Product,
  Home,
  Shop,
  CartPage,
  CheckoutPage,
} from "./containers/index";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CartContextCustom from "./utils/context/CartContextCustom";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <CartContextCustom>
      <ScrollToTop />
      <header className="bg-global-color-4">
        <Header
          setCartToggle={setCartToggle}
          setMobileMenuToggle={setMobileMenuToggle}
        />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />

      <MobileMenu
        mobileMenuToggle={mobileMenuToggle}
        setMobileMenuToggle={setMobileMenuToggle}
      />
      <ShopingCart setCartToggle={setCartToggle} cartToggle={cartToggle} />
    </CartContextCustom>
  );
}

export default App;
