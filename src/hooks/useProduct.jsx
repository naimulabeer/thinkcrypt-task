import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://thinkcrypt-backend-404c5b8ec31f.herokuapp.com/api/v0/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.doc));
  }, []);

  return products;
}

export default useProducts;
