import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShopingCart from "./components/ShopingCart";
import MobileMenu from "./components/MobileMenu";
import Home from "./containers/Home";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <>
      <header>
        <Header
          setCartToggle={setCartToggle}
          setMobileMenuToggle={setMobileMenuToggle}
        />
      </header>

      <main>
        <Home />
      </main>

      <MobileMenu
        mobileMenuToggle={mobileMenuToggle}
        setMobileMenuToggle={setMobileMenuToggle}
      />
      <ShopingCart setCartToggle={setCartToggle} cartToggle={cartToggle} />
    </>
  );
}

export default App;
