import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import classes from "./CSS/ProductList.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setIsLoading(false);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div>
      {isLoading && <p style={{ marginLeft: "500px;" }}>Loading..</p>}
      <div className={classes["item-container"]}>
        {products.map((product) => {
          return <ProductList list={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
export default Products;
