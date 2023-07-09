import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShopingCart from "./components/ShopingCart";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <>
      <Header setCartToggle={setCartToggle} />

      <ShopingCart setCartToggle={setCartToggle} cartToggle={cartToggle} />
    </>
  );
}

export default App;
