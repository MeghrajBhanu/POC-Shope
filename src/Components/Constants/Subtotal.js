import React from "react";
import "./CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Store/State/StateProvider";
import { getBasketTotal } from "../../Store/getBasketTotal";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
