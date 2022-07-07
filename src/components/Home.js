import React, { useContext } from "react";
import cartContext from "./context/Context";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
function Home() {
  const {
    state: { product },
  } = useContext(cartContext);
  console.log(product);

  return (
    <div className="container-fluid h-100">
      <div className="row mainBox">
        <div className="col-2 p-0 h-100">
          <Sidebar />
        </div>
        <div className="col-10 mainBox">
          <div className="row justify-content-between" id="Product">
            {product.map((prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
