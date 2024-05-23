import React, { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import Tvsrider from "./pages/Tvsrider";
import  "./styles/Tvsrider.css";

const commerce = new Commerce(
  "YOUR SANDBOX KEY GOES HERE"
);

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Tvsrider key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;