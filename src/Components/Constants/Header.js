import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Store/State/StateProvider";
import classes from "./CSS/Header.module.css";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes["header__logo"]}
          alt="logo"
          src="https://blog.logrocket.com/wp-content/uploads/2021/08/building-ecommerce-app-react-native.png"
        />
      </Link>
      /<h3 className={classes["header-title"]}>Shope</h3>
      <Link to="/checkout">
        <div className={classes["header__optionBasket"]}>
          <ShoppingBasketIcon />
          <span
            className={classes["header__optionLineTwo header__basketCount"]}
          >
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
};
export default Header;
