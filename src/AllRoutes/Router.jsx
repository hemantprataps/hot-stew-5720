

import { Routes, Route } from "react-router-dom"
import MakeupProducts from "./Makeup"
import Home from "./Home"

import Products from "./Products"

const Router = () => {


    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/makeup" element={<MakeupProducts />} />



    </Routes>
    )
}

export default Router
