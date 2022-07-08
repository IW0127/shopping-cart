import React, { useContext } from "react";
import cartContext from "./context/Context";
import Total from "./Total";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(cartContext);

  return (
    <div className="row mainBox">
      <div className="col-10"></div>
      <div className="col-2 ">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
