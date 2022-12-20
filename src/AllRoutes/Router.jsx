

import { Routes, Route } from "react-router-dom"
import MakeupProducts from "./Makeup"
import Home from "./Home"

import Products from "./Products"
import SingleProduct from "./SingleProduct"
import LoginButton from "./Login"
import Sale from "./Sale"
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom"
import Bag from "./Bag"

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

const Router = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();


    return (<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/makeup" element={<MakeupProducts />} />
        <Route path="/makeup/:id" element={isAuthenticated ? <SingleProduct /> : <MakeupProducts />
        } />

        <Route path="/bag" element={<Bag />} />

        <Route path="/sale" element={<Sale />} />
        <Route path="/Sale/:id" element={isAuthenticated ? <SingleProduct /> : <LoginButton />
        } />
        <Route path="/login" element={<LoginButton />} />
    </Routes>
    )
}

export default Router
