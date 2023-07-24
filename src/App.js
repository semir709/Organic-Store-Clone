import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShopingCart from "./components/ShopingCart";
import MobileMenu from "./components/MobileMenu";
import Home from "./containers/Home";
import Shop from "./containers/Shop";
import Footer from "./components/Footer";
import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import Product from "./containers/Product";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import sanityClient from "./client.js";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'test'] {
    name
  }`
      )
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <ScrollToTop />
      <header className="bg-global-color-4">
        <Header
          setCartToggle={setCartToggle}
          setMobileMenuToggle={setMobileMenuToggle}
        />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

      <MobileMenu
        mobileMenuToggle={mobileMenuToggle}
        setMobileMenuToggle={setMobileMenuToggle}
      />
      <ShopingCart setCartToggle={setCartToggle} cartToggle={cartToggle} />
    </>
  );
}

export default App;
