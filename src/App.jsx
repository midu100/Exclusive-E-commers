import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layout/LayoutOne";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AllCate from "./pages/AllCate";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup ";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import app from "./Firebase.config";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />}></Route>
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/allcategory" element={<AllCate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Signin />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
      <ToastContainer />
    </>
  );
}

export default App;
