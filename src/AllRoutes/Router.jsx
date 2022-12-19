

import { Routes, Route } from "react-router-dom"
import MakeupProducts from "./Makeup"
import Home from "./Home"

import Products from "./Products"
import SingleProduct from "./SingleProduct"
import Login from "./Login"

const Router = () => {


    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/makeup" element={<MakeupProducts />} />
        <Route path="/makeup/:id" element={<SingleProduct />} />

        <Route path="/login" element={<Login />} />
    </Routes>
    )
}

export default Router
