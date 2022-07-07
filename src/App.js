import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/NotFound";
import { Reducer, Context } from "./components/context/Context";
import "./App.css";

function App() {
  const { state, dispatch } = Reducer();
  return (
    <Context value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}
export default App;
