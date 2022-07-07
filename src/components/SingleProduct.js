import React from "react";
import Rating from "./Rating";
/* import SidedlyBar from "./Sidebar"; */

function SingleProduct({ prod }) {
  return (
    <div className="card col-3 m-2" style={{ width: "18rem" }}>
      <img src={prod.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title"> {prod.name} </h5>
        <div className="card-text">
          Price : ₹<span>{prod.price}</span>
          <h6 className="card-subtitle my-1 text-muted">
            {prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}
          </h6>
          <Rating />
        </div>
        <br />
        {/* {cart.includes(prod) ? (
          <button
            className="btn btn-danger Price"
            onClick={() => {
              //   setCart(cart.filter((c) => c.id !== prod.id))
            }}
          >
            remove
          </button>
        ) : (
          <button
            className="btn btn-primary Price"
            onClick={() => {
              //   setCart([...cart, prod]);
            }}
          >
            Buy
          </button>
        )} */}
      </div>
    </div>
  );
}

export default SingleProduct;
