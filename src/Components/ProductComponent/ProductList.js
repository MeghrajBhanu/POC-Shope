import classes from "./CSS/ProductList.module.css";

import { useStateValue } from "../../Store/State/StateProvider";
const ProductList = ({ list }) => {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: list.id,
        title: list.title,
        image: list.images[0],
        price: list.price,
        rating: list.rating,
      },
    });
  };
  return (
    <div className={classes.card}>
      <h4>{list.title} </h4>
      <img src={list.images[0]} alt={list.title} />

      <p className={classes["product__rating"]}>
        <small>{list.rating}</small>
        {Array(Math.floor(list.rating))
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </p>
      <p>
        <small>$</small>
        <strong>{list.price}</strong>{" "}
        <sub className={classes.subtext}>
          ${Math.trunc(list.price + list.discountPercentage)}
        </sub>
      </p>
      {list.stock > 0 ? (
        <p className={classes.stock}>only {list.stock} left in stock </p>
      ) : (
        <p>out of stock</p>
      )}
      <button onClick={addToBasket}>+ Add</button>
    </div>
  );
};
export default ProductList;
